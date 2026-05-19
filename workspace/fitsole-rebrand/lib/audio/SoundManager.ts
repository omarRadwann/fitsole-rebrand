'use client'

/*
 * SoundManager — singleton Web Audio API wrapper.
 *
 * Discipline:
 *  - Default muted.
 *  - AudioContext creation is lazy and gated on the first user gesture
 *    (per Chrome/Safari autoplay policy).
 *  - State (enabled/disabled) is persisted in localStorage.
 *  - All sfx are pure-synth (no audio files) — keeps bundle 0 KB of media.
 *  - Reduce-motion users: sfx still play. Reduce-motion limits MOTION,
 *    not sound. (Ambient pad is the one exception — disabled.)
 *
 * Public API:
 *   sound.enable() / disable() / toggle() / isEnabled
 *   sound.ensureContext()  — must be called from a user gesture
 *   sound.play(name)       — plays a named sfx if enabled
 */

const LS_KEY = 'fitsole.audio.enabled'

type SfxName = 'addToCart' | 'reserveBranch' | 'cartOpen' | 'cartClose' | 'pageNavigate'

type Listener = (enabled: boolean) => void

class SoundManagerImpl {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private enabled = false
  private listeners = new Set<Listener>()

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const v = window.localStorage.getItem(LS_KEY)
        this.enabled = v === '1'
      } catch {
        /* localStorage blocked — stay muted */
      }
    }
  }

  get isEnabled() {
    return this.enabled
  }

  subscribe(l: Listener): () => void {
    this.listeners.add(l)
    return () => {
      this.listeners.delete(l)
    }
  }

  private emit() {
    for (const l of this.listeners) l(this.enabled)
  }

  enable() {
    this.enabled = true
    this.persist()
    void this.ensureContext()
    this.emit()
  }

  disable() {
    this.enabled = false
    this.persist()
    this.emit()
  }

  toggle() {
    if (this.enabled) this.disable()
    else this.enable()
  }

  private persist() {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(LS_KEY, this.enabled ? '1' : '0')
    } catch {
      /* swallow */
    }
  }

  /** Must be called from a user gesture. */
  async ensureContext(): Promise<AudioContext | null> {
    if (typeof window === 'undefined') return null
    if (this.ctx) {
      if (this.ctx.state === 'suspended') await this.ctx.resume()
      return this.ctx
    }
    type WindowWithWebkit = Window & { webkitAudioContext?: typeof AudioContext }
    const w = window as WindowWithWebkit
    const Ctor = window.AudioContext || w.webkitAudioContext
    if (!Ctor) return null
    this.ctx = new Ctor()
    this.master = this.ctx.createGain()
    this.master.gain.value = 0.18 // -15 dB rough peak ceiling
    this.master.connect(this.ctx.destination)
    if (this.ctx.state === 'suspended') {
      try { await this.ctx.resume() } catch { /* ignore */ }
    }
    return this.ctx
  }

  play(name: SfxName) {
    if (!this.enabled) return
    const ctx = this.ctx
    const master = this.master
    if (!ctx || !master) return
    switch (name) {
      case 'addToCart':
        return this.playAddToCart(ctx, master)
      case 'reserveBranch':
        return this.playReserveBranch(ctx, master)
      case 'cartOpen':
        return this.playCartOpen(ctx, master)
      case 'cartClose':
        return this.playCartClose(ctx, master)
      case 'pageNavigate':
        return this.playPageNavigate(ctx, master)
    }
  }

  // Soft chime: C5 + G5 sine, 320ms decay. Reads as "added".
  private playAddToCart(ctx: AudioContext, master: GainNode) {
    const t = ctx.currentTime
    for (const freq of [523.25, 783.99]) {
      const o = ctx.createOscillator()
      o.type = 'sine'
      o.frequency.setValueAtTime(freq, t)
      const g = ctx.createGain()
      g.gain.setValueAtTime(0, t)
      g.gain.linearRampToValueAtTime(0.5, t + 0.015)
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.32)
      o.connect(g).connect(master)
      o.start(t)
      o.stop(t + 0.34)
    }
  }

  // Terracotta confirm: E4 + B4 triangle, 420ms with slight detune. Reads warmer.
  private playReserveBranch(ctx: AudioContext, master: GainNode) {
    const t = ctx.currentTime
    for (const freq of [329.63, 493.88]) {
      const o = ctx.createOscillator()
      o.type = 'triangle'
      o.frequency.setValueAtTime(freq, t)
      o.frequency.linearRampToValueAtTime(freq * 1.005, t + 0.42)
      const g = ctx.createGain()
      g.gain.setValueAtTime(0, t)
      g.gain.linearRampToValueAtTime(0.4, t + 0.022)
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.42)
      o.connect(g).connect(master)
      o.start(t)
      o.stop(t + 0.44)
    }
  }

  // Warm swoosh: 60Hz thump + filtered noise burst. ~380ms total.
  private playCartOpen(ctx: AudioContext, master: GainNode) {
    const t = ctx.currentTime
    // Thump
    const o = ctx.createOscillator()
    o.type = 'sine'
    o.frequency.setValueAtTime(72, t)
    o.frequency.exponentialRampToValueAtTime(40, t + 0.16)
    const og = ctx.createGain()
    og.gain.setValueAtTime(0.6, t)
    og.gain.exponentialRampToValueAtTime(0.001, t + 0.16)
    o.connect(og).connect(master)
    o.start(t)
    o.stop(t + 0.18)

    // Filtered noise tail
    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate)
    const noiseData = noiseBuf.getChannelData(0)
    for (let i = 0; i < noiseData.length; i++) noiseData[i] = (Math.random() * 2 - 1) * 0.6
    const src = ctx.createBufferSource()
    src.buffer = noiseBuf
    const filt = ctx.createBiquadFilter()
    filt.type = 'bandpass'
    filt.frequency.setValueAtTime(1800, t)
    filt.Q.value = 0.8
    const ng = ctx.createGain()
    ng.gain.setValueAtTime(0, t)
    ng.gain.linearRampToValueAtTime(0.18, t + 0.04)
    ng.gain.exponentialRampToValueAtTime(0.001, t + 0.38)
    src.connect(filt).connect(ng).connect(master)
    src.start(t)
    src.stop(t + 0.42)
  }

  // Short tail: 140Hz triangle, 150ms.
  private playCartClose(ctx: AudioContext, master: GainNode) {
    const t = ctx.currentTime
    const o = ctx.createOscillator()
    o.type = 'triangle'
    o.frequency.setValueAtTime(140, t)
    o.frequency.exponentialRampToValueAtTime(90, t + 0.15)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.4, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.15)
    o.connect(g).connect(master)
    o.start(t)
    o.stop(t + 0.17)
  }

  // Page-nav rise: D4 → A4 portamento sine, ~330ms.
  private playPageNavigate(ctx: AudioContext, master: GainNode) {
    const t = ctx.currentTime
    const o = ctx.createOscillator()
    o.type = 'sine'
    o.frequency.setValueAtTime(293.66, t)
    o.frequency.linearRampToValueAtTime(440, t + 0.32)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(0.3, t + 0.022)
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.33)
    o.connect(g).connect(master)
    o.start(t)
    o.stop(t + 0.34)
  }
}

let _instance: SoundManagerImpl | null = null

export function getSoundManager(): SoundManagerImpl {
  if (!_instance) _instance = new SoundManagerImpl()
  return _instance
}

export type { SfxName }

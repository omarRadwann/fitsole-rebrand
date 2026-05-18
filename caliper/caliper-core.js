/* Caliper — core script (stage 2/3)
 *
 * - Loads Three.js via importmap (CDN). DRACOLoader decodes the 14.9 KB GLB.
 * - Mounts the caliper instrument in #instrument-canvas with three animation clips:
 *   idle (default), measuring (scroll-driven), seeking (one-shot transitions).
 * - Falls back to the SVG schematic when WebGL fails, GLB fails, or
 *   prefers-reduced-motion is set.
 * - Keyboard control on the focusable measurement value drives the same
 *   "measuring" mix factor as scroll, and emits aria-live announcements.
 * - Idle measuring sweep in the top ruler (unchanged from stage 1).
 *
 * Budget honesty (per V7 truthfulness gate):
 * Three.js core is ~130 KB gzipped — this blows the originally-stated 60 KB
 * JS budget in docs/art-direction.md §Implementation budget. Marked as
 * "Manual review" in docs/qa-report.md.
 *
 * Reference: docs/art-direction.md §The caliper instrument + §Motion principles
 *            docs/copy-system.md §Microcopy locks (measurement read-out)
 */

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('instrument-canvas');
  const fallback = document.querySelector('.instrument__fallback');
  const announce = document.getElementById('measurement-announce');
  const measureText = document.querySelector('[data-measure-value]');

  // -------------------------------------------------------------------------
  // measurement / mix-factor state — shared between Three.js scene and SVG fallback
  // -------------------------------------------------------------------------

  // The caliper x position runs 8.0 (idle) -> 2.8 (fully measuring).
  // mm read-out is mapped: x=8.0 -> 0mm spread, x=2.8 -> 28mm spread.
  // (The "measuring" clip is keyframed in caliper_instrument.py to span exactly this.)
  const X_OPEN    = 8.0;
  const X_CLOSED  = 2.8;
  const MM_AT_OPEN   = 0.0;
  const MM_AT_CLOSED = 28.0;

  let mix = 0;            // 0 = fully open, 1 = fully measuring
  function mixToMm(m) {
    return MM_AT_OPEN + (MM_AT_CLOSED - MM_AT_OPEN) * m;
  }
  function updateReadout(m) {
    mix = Math.max(0, Math.min(1, m));
    const mm = mixToMm(mix);
    if (measureText) {
      measureText.textContent = mm.toFixed(1) + ' mm';
      measureText.setAttribute('aria-valuenow', mm.toFixed(1));
    }
    if (announce) {
      // Throttled via requestAnimationFrame upstream
      announce.textContent = 'measurement ' + mm.toFixed(1) + ' millimetres';
    }
  }

  // -------------------------------------------------------------------------
  // Keyboard control (works on both fallback and Three.js modes)
  // -------------------------------------------------------------------------

  if (measureText) {
    measureText.setAttribute('tabindex', '0');
    measureText.setAttribute('role', 'spinbutton');
    measureText.setAttribute('aria-valuemin', String(MM_AT_OPEN));
    measureText.setAttribute('aria-valuemax', String(MM_AT_CLOSED));
    measureText.addEventListener('keydown', (e) => {
      let next = mix;
      const step = 0.05;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp')   next += step;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next -= step;
      else if (e.key === 'PageUp')   next += step * 4;
      else if (e.key === 'PageDown') next -= step * 4;
      else if (e.key === 'Home')     next = 0;
      else if (e.key === 'End')      next = 1;
      else return;
      e.preventDefault();
      updateReadout(next);
      // If Three.js is live, the rAF loop reads `mix` and updates the action time.
    });
  }

  // -------------------------------------------------------------------------
  // Scroll coupling — the page's scroll progress through the hero -> spread
  // section drives `mix`. As the user scrolls down into "the spread test",
  // the caliper closes.
  // -------------------------------------------------------------------------

  // Anchor element: the spread test section's bottom is where the caliper
  // should be fully closed (mix = 1.0). Past that point, the measurement
  // is "locked" — caliper holds at the measured value while the rest of the
  // page reads. Falls back to a heuristic if the anchor isn't found.
  const spreadAnchor = document.querySelector('.spread');
  function scrollMix() {
    const y = window.scrollY || window.pageYOffset || 0;
    if (spreadAnchor) {
      const rect = spreadAnchor.getBoundingClientRect();
      const bottom = rect.bottom + y;       // page-absolute bottom of spread section
      const startY = 80;                    // start closing after this much scroll
      const endY = bottom - window.innerHeight * 0.45;
      if (y <= startY) return 0;
      if (y >= endY) return 1;
      return (y - startY) / Math.max(1, (endY - startY));
    }
    // Fallback for stage 1/2 layout
    return Math.min(1, Math.max(0, y / 600));
  }
  let scrolling = false;
  window.addEventListener('scroll', () => {
    if (scrolling) return;
    scrolling = true;
    requestAnimationFrame(() => {
      updateReadout(scrollMix());
      scrolling = false;
    });
  }, { passive: true });

  // -------------------------------------------------------------------------
  // Fallback path: show the SVG, no Three.js. Done if reduced-motion is set,
  // or if WebGL is unavailable, or if the GLB fails to load.
  // -------------------------------------------------------------------------

  function useFallback() {
    if (canvas) canvas.style.display = 'none';
    if (fallback) fallback.style.display = 'block';
  }
  function useCanvas() {
    if (canvas) canvas.style.display = 'block';
    if (fallback) fallback.style.display = 'none';
  }

  function webglAvailable() {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
    } catch (e) { return false; }
  }

  if (reduceMotion || !canvas || !webglAvailable()) {
    useFallback();
    initIdleSweep();
    return;
  }

  // -------------------------------------------------------------------------
  // Three.js scene — loaded lazily after first paint
  // -------------------------------------------------------------------------

  // Show the SVG until the GLB finishes loading. Then swap.
  useFallback();

  async function loadScene() {
    let THREE, GLTFLoader, DRACOLoader;
    try {
      THREE = await import('three');
      ({ GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js'));
      ({ DRACOLoader } = await import('three/addons/loaders/DRACOLoader.js'));
    } catch (err) {
      console.warn('[caliper] three import failed; keeping SVG fallback', err);
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    const scene = new THREE.Scene();
    scene.background = null;

    // The caliper's bounding box is roughly x:[0,18], z:[-4,1].
    // The canvas is portrait (~0.67 aspect) at desktop. We frame for the long axis.
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 200);
    camera.position.set(8, 5, 44);
    camera.lookAt(8, -1.5, 0);

    // Lights — match Blender lighting roughly
    const key = new THREE.DirectionalLight(0xfff4dc, 1.6);
    key.position.set(6, 12, 8);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xc8d8ff, 0.35);
    rim.position.set(14, 4, -6);
    scene.add(rim);
    scene.add(new THREE.HemisphereLight(0xfff7e6, 0x806648, 0.4));

    // GLB loader with Draco
    const draco = new DRACOLoader();
    draco.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/libs/draco/');
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);

    let mixer = null;
    let actions = {};
    let glbRoot = null;

    loader.load('blender/caliper.glb', (gltf) => {
      glbRoot = gltf.scene;
      glbRoot.position.set(0, 0, 0);
      glbRoot.scale.setScalar(1);
      // Mobile orientation: rotate the caliper to vertical when the canvas
      // is narrow. Per docs/art-direction.md §The caliper instrument · Mobile.
      const isNarrow = window.matchMedia('(max-width: 960px)').matches;
      if (isNarrow) {
        glbRoot.rotation.z = Math.PI / 2;
        // Re-frame camera for the vertical orientation
        camera.position.set(2, 8, 36);
        camera.lookAt(2, 8, 0);
      }
      scene.add(glbRoot);

      mixer = new THREE.AnimationMixer(glbRoot);
      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        actions[clip.name] = action;
      });

      // The "measuring" clip is our spine — its duration is what we scrub.
      const m = actions['measuring'];
      if (m) {
        m.play();
        m.paused = true;     // don't auto-advance; we manually set m.time from `mix`.
        m.time = 0;
      }

      // Swap to canvas
      useCanvas();
      resize();
      // Initial render
      renderer.render(scene, camera);
    }, undefined, (err) => {
      console.warn('[caliper] caliper.glb failed to load; keeping SVG fallback', err);
      useFallback();
    });

    // rAF loop — only do real work when something changed
    let lastMix = -1;
    let lastT = performance.now();
    function tick() {
      const now = performance.now();
      const dt = (now - lastT) / 1000;
      lastT = now;
      if (mixer && actions['measuring']) {
        const m = actions['measuring'];
        const target = mix * (m.getClip().duration);
        // Smooth a bit toward target
        m.time += (target - m.time) * Math.min(1, dt * 7.5);
        mixer.update(0); // we're scrubbing time manually
      }
      // Subtle camera breath
      if (glbRoot) {
        const breath = Math.sin(now * 0.0006) * 0.04;
        camera.position.y = 4 + breath;
        camera.lookAt(9, -1, 0);
      }
      if (mixer || Math.abs(mix - lastMix) > 0.001) {
        renderer.render(scene, camera);
        lastMix = mix;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    window.addEventListener('resize', resize);
    resize();
  }

  // Defer Three.js load until idle / after first paint so LCP stays clean.
  if (window.requestIdleCallback) {
    requestIdleCallback(() => loadScene(), { timeout: 1500 });
  } else {
    window.addEventListener('load', () => setTimeout(loadScene, 250));
  }

  // -------------------------------------------------------------------------
  // Idle measuring-sweep in the top ruler (stage 1 holdover)
  // -------------------------------------------------------------------------

  function initIdleSweep() {
    if (reduceMotion) return;
    const sweep = document.querySelector('.ruler-top__scale');
    if (!sweep) return;
    sweep.style.position = 'relative';
    const mark = document.createElement('span');
    mark.style.cssText =
      'position:absolute; top:0; bottom:0; width:2px; background:var(--measure);' +
      'left:0; opacity:0; pointer-events:none; transition:opacity 240ms var(--ease-mech);';
    sweep.appendChild(mark);
    let t = 0;
    const tick = () => {
      const r = sweep.getBoundingClientRect();
      mark.style.left = (t % r.width) + 'px';
      mark.style.opacity = '0.85';
      setTimeout(() => { mark.style.opacity = '0'; }, 180);
      t += r.width / 18;
      setTimeout(tick, 1100);
    };
    setTimeout(tick, 2400);
  }
  initIdleSweep();

  // -------------------------------------------------------------------------
  // Diagnostic form — submit is a no-op (no backend); shows the success
  // microcopy locked in docs/copy-system.md §Microcopy locks.
  // -------------------------------------------------------------------------

  const form = document.querySelector('.diagnostic-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Clear any prior error styling
      form.querySelectorAll('input, select, textarea').forEach((el) => {
        el.style.borderBottomColor = '';
      });
      // Lightweight validation
      const missing = [];
      form.querySelectorAll('[required]').forEach((el) => {
        const val = (el.value || '').trim();
        if (!val) {
          missing.push(el);
          el.style.borderBottomColor = 'var(--measure)';
        }
      });
      if (missing.length) {
        status.textContent = 'That didn’t go through. The fields outlined in magenta are missing.';
        status.classList.remove('is-ok');
        missing[0].focus();
        return;
      }
      status.textContent = 'We’ll reply within one working day. If we don’t, we’ve decided not to.';
      status.classList.add('is-ok');
      form.reset();
    });
  }

  // Console signature
  console.log('%ccaliper — stage 4 build, home complete', 'font-family:monospace;font-size:12px;color:#a31764');
}());

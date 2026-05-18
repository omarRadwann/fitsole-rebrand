/* Caliper — core script
 * - Detects WebGL + reduced-motion, decides between Three.js instrument and SVG fallback.
 * - Stage 1: SVG fallback only (Three.js scene comes in next stage with the Blender GLB).
 * - Keyboard control on the caliper: ArrowLeft/Right adjusts the measurement; reports via aria-live.
 * Reference: ../docs/art-direction.md §The caliper instrument + §Accessibility commitments
 */

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('instrument-canvas');
  const fallback = document.querySelector('.instrument__fallback');
  const announce = document.getElementById('measurement-announce');

  // Stage 1: always render fallback. Stage 2 will swap in Three.js + GLB.
  if (canvas) canvas.style.display = 'none';
  if (fallback) fallback.style.display = 'block';

  // Keyboard interaction on the fallback measurement (the magenta value)
  // demonstrates the announce hook; will be re-wired to the Three.js scene in stage 2.
  const measureText = document.querySelector('[data-measure-value]');
  if (measureText && announce) {
    let mm = 28.0;
    const min = 0, max = 80, step = 0.5;
    const setVal = (v) => {
      mm = Math.max(min, Math.min(max, v));
      measureText.textContent = mm.toFixed(1) + ' mm';
      announce.textContent = 'measurement ' + mm.toFixed(1) + ' millimetres';
    };
    measureText.setAttribute('tabindex', '0');
    measureText.setAttribute('role', 'spinbutton');
    measureText.setAttribute('aria-valuemin', String(min));
    measureText.setAttribute('aria-valuemax', String(max));
    measureText.addEventListener('keydown', (e) => {
      let next = mm;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next += step;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next -= step;
      else if (e.key === 'PageUp') next += step * 10;
      else if (e.key === 'PageDown') next -= step * 10;
      else if (e.key === 'Home') next = min;
      else if (e.key === 'End') next = max;
      else return;
      e.preventDefault();
      setVal(next);
      measureText.setAttribute('aria-valuenow', String(mm));
    });
  }

  // Idle rule animation in the top ruler — adds a subtle measuring sweep every 12s.
  // Pure CSS would suffice, but doing it in JS keeps it pausable for reduced-motion.
  if (!reduceMotion) {
    const sweep = document.querySelector('.ruler-top__scale');
    if (sweep) {
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
  }

  // Console signature for curious devs
  // (Halo had its own; Caliper's is in mono.)
  console.log('%ccaliper — stage 1 build, static instrument', 'font-family:monospace;font-size:12px;color:#a31764');
}());

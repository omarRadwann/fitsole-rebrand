/* Drop Floor — unified motion + 3D + cursor + kinetic typography layer */
/* test1/shared/dropfloor.js */
/* Loaded as: <script type="module" src="./shared/dropfloor.js"></script> */
/* Per page: <script type="module">import { initDropFloor } from './shared/dropfloor.js'; initDropFloor({ heroGlb: '...', pageType: '...' });</script> */

const CDN = {
  // Three.js + addons resolved via importmap declared on each HTML page.
  // Bare specifiers ('three', 'three/addons/...') are mapped in the page's importmap.
  three: 'three',
  gltfLoader: 'three/addons/loaders/GLTFLoader.js',
  dracoLoader: 'three/addons/loaders/DRACOLoader.js',
  dracoDecoder: 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/',
};

const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const COARSE = matchMedia('(pointer: coarse)').matches || matchMedia('(hover: none)').matches;

const state = {
  inited: false,
  pageType: null,
  cursorRing: null,
  cursorDot: null,
  cursorLabel: null,
  lenis: null,
  scrollProgress: 0,
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ============================================================
// Top-level init — called from each page
// ============================================================

export async function initDropFloor(opts = {}) {
  if (state.inited) return;
  state.inited = true;
  state.pageType = opts.pageType || 'index';

  document.documentElement.classList.add('df-active');

  // Reduced-motion bypass: still install cursor (CSS hides it on coarse) and a11y, skip motion.
  if (REDUCE) {
    document.documentElement.removeAttribute('data-drop-ready');
    if (!COARSE) installCursor();
    revealAllKineticImmediately();
    return;
  }

  // Mark data-drop-ready so CSS can pre-hide kinetic content before split.
  document.documentElement.setAttribute('data-drop-ready', '1');

  // Cursor first (no deps)
  if (!COARSE) installCursor();

  // Kinetic typography (no GSAP yet, but we'll upgrade with timeline once GSAP is loaded)
  installKineticType();

  // Load GSAP + Lenis + (optionally) Three.js in parallel
  const [gsap, ScrollTrigger, Lenis] = await Promise.all([
    loadGsap(),
    loadScrollTrigger(),
    loadLenis(),
  ]).catch(err => {
    console.warn('[dropfloor] CDN load failed; falling back to CSS-only', err);
    revealAllKineticImmediately();
    return [null, null, null];
  });

  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    state.gsap = gsap;
    state.ScrollTrigger = ScrollTrigger;

    if (Lenis) installLenis(gsap, Lenis);

    runKineticAnimations(gsap, ScrollTrigger);
    runHeroLandingSequence(gsap);
    runScrollSequences(gsap, ScrollTrigger);
    runScrollProgress(ScrollTrigger);
  } else {
    revealAllKineticImmediately();
  }

  // Three.js hero scene — runs if a stage element exists, with or without a GLB
  const stage = $('.df-hero-scene') || $('#dropfloor-hero-stage');
  if (stage && (opts.heroGlb || opts.sceneType)) {
    try {
      await installHeroScene(stage, opts.heroGlb, opts);
    } catch (err) {
      console.warn('[dropfloor] hero 3D failed:', err);
      stage.dataset.loaded = '0';
    }
  }

  // Per-page signature moment
  if (opts.pageType === 'index') installIndexSignature();
  if (opts.pageType === 'work') installWorkSignature();
  if (opts.pageType === 'studio') installStudioSignature();
  if (opts.pageType === 'journal') installJournalSignature();
  if (opts.pageType === 'notfound') installNotFoundSignature(opts.heroGlb || './blender/apogee_lost.glb');

  // ASCII footer (re-skinned sneaker silhouette)
  installAsciiFooter();

  // Cleanup the pre-hide attribute once everything is mounted
  setTimeout(() => document.documentElement.removeAttribute('data-drop-ready'), 80);
}

// ============================================================
// CDN loaders — graceful failure
// ============================================================

function loadGsap() {
  return new Promise((resolve, reject) => {
    if (window.gsap) return resolve(window.gsap);
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    s.onload = () => resolve(window.gsap);
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function loadScrollTrigger() {
  return new Promise((resolve, reject) => {
    if (window.ScrollTrigger) return resolve(window.ScrollTrigger);
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
    s.onload = () => resolve(window.ScrollTrigger);
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function loadLenis() {
  return new Promise(resolve => {
    if (window.Lenis) return resolve(window.Lenis);
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/lenis@1.3.0/dist/lenis.min.js';
    s.onload = () => resolve(window.Lenis);
    s.onerror = () => resolve(null); // Lenis is optional
    document.head.appendChild(s);
  });
}

// ============================================================
// Lenis smooth scroll
// ============================================================

function installLenis(gsap, Lenis) {
  const lenis = new Lenis({ duration: 1.0, smoothWheel: true, smoothTouch: false });
  lenis.on('scroll', () => state.ScrollTrigger?.update());
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  state.lenis = lenis;
}

// ============================================================
// Custom cursor
// ============================================================

function installCursor() {
  if (state.cursorRing) return;
  const ring = document.createElement('div');
  ring.className = 'df-cursor-ring';
  const dot = document.createElement('div');
  dot.className = 'df-cursor-dot';
  const label = document.createElement('div');
  label.className = 'df-cursor-label';
  document.body.appendChild(ring);
  document.body.appendChild(dot);
  document.body.appendChild(label);
  state.cursorRing = ring;
  state.cursorDot = dot;
  state.cursorLabel = label;

  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  let rx = x, ry = y;
  const html = document.documentElement;

  window.addEventListener('pointermove', e => {
    x = e.clientX;
    y = e.clientY;
    html.style.setProperty('--df-cursor-active', '1');
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    html.style.setProperty('--df-cursor-active', '0');
  });

  // Hover targets
  document.addEventListener('pointerover', e => {
    const target = e.target.closest('[data-cursor]');
    if (!target) {
      ring.dataset.state = '';
      label.classList.remove('is-on');
      return;
    }
    const mode = target.dataset.cursor || 'link';
    ring.dataset.state = mode;
    const text = target.dataset.cursorLabel || '';
    if (text) {
      label.textContent = text;
      label.classList.add('is-on');
    }
  });

  document.addEventListener('pointerout', e => {
    if (!e.relatedTarget || !e.target.closest('[data-cursor]')) {
      ring.dataset.state = '';
      label.classList.remove('is-on');
    }
  });

  const raf = () => {
    rx += (x - rx) * 0.22;
    ry += (y - ry) * 0.22;
    html.style.setProperty('--df-cx', `${rx}px`);
    html.style.setProperty('--df-cy', `${ry}px`);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

// ============================================================
// Kinetic typography
// ============================================================

function installKineticType() {
  $$('[data-kinetic]').forEach(el => {
    if (el.dataset.kineticReady) return;
    el.dataset.kineticReady = '1';
    const words = el.textContent.split(/(\s+)/);
    el.textContent = '';
    words.forEach(token => {
      if (/^\s+$/.test(token)) {
        el.appendChild(document.createTextNode(token));
        return;
      }
      const wrap = document.createElement('span');
      wrap.className = 'df-kinetic-word';
      token.split('').forEach(ch => {
        const span = document.createElement('span');
        span.className = 'df-kinetic-letter';
        span.textContent = ch;
        wrap.appendChild(span);
      });
      el.appendChild(wrap);
    });
  });
}

function revealAllKineticImmediately() {
  $$('.df-kinetic-letter').forEach(l => {
    l.style.opacity = '1';
    l.style.transform = 'none';
  });
  document.documentElement.removeAttribute('data-drop-ready');
}

function runKineticAnimations(gsap, ScrollTrigger) {
  // Hero kinetic (immediate) is handled by runHeroLandingSequence.
  // Per-section kinetic — fire on scroll-in.
  $$('[data-kinetic]').forEach(el => {
    if (el.dataset.kineticRole === 'hero') return; // handled separately
    const letters = el.querySelectorAll('.df-kinetic-letter');
    if (!letters.length) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 84%',
      once: true,
      onEnter: () => {
        gsap.to(letters, {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.in',
          stagger: 0.028,
        });
      },
    });
  });
}

function runHeroLandingSequence(gsap) {
  const heroEl = $('[data-kinetic][data-kinetic-role="hero"]');
  if (!heroEl) return;
  const letters = heroEl.querySelectorAll('.df-kinetic-letter');
  if (!letters.length) return;
  gsap.set(letters, { yPercent: -130, opacity: 0 });
  gsap.to(letters, {
    yPercent: 0,
    opacity: 1,
    duration: 0.62,
    ease: 'back.out(1.6)',
    stagger: 0.05,
    delay: 0.2,
  });
}

function runScrollSequences(gsap, ScrollTrigger) {
  // Pinned / scrubbed sections via data-scroll-act
  $$('[data-scroll-act]').forEach(section => {
    const role = section.dataset.scrollAct;
    if (role === 'shop-the-look-pinned') {
      const products = section.querySelectorAll('[data-shop-product]');
      if (!products.length) return;
      gsap.set(products, { yPercent: -160, opacity: 0, rotateZ: -8 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
      products.forEach((p, i) => {
        tl.to(p, {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          ease: 'power3.in',
          duration: 1,
        }, i * 0.6);
      });
    }
    if (role === 'work-rail-counter') {
      section.querySelectorAll('[data-kpi]').forEach(kpi => {
        const target = Number(kpi.dataset.kpi) || 0;
        const suffix = kpi.dataset.kpiSuffix || '';
        const obj = { v: 0 };
        ScrollTrigger.create({
          trigger: kpi,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              v: target,
              duration: 1.4,
              ease: 'power2.out',
              onUpdate: () => {
                kpi.textContent = Math.round(obj.v).toLocaleString('en-US') + suffix;
              },
            });
          },
        });
      });
    }
  });
}

function runScrollProgress(ScrollTrigger) {
  // Update CSS --df-scroll-progress as user scrolls, for parallax layers
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: self => {
      state.scrollProgress = self.progress;
      document.documentElement.style.setProperty('--df-scroll-progress', self.progress.toFixed(4));
    },
  });
}

// ============================================================
// Procedural sneaker builder (original geometry — no IP risk)
// ============================================================

function buildProceduralSneaker(THREE, opts = {}) {
  const group = new THREE.Group();
  group.name = 'dropfloor-sneaker';

  // Materials — art-director decisions: ink sole, brand-red iridescent upper, cream stripes
  const INK = 0x151515;
  const RED = opts.modelTint || 0xd71920;
  const RED_DEEP = 0xb8141a;
  const CREAM = 0xfff9f1;

  const matSole = new THREE.MeshPhysicalMaterial({
    color: INK, roughness: 0.68, metalness: 0.02, clearcoat: 0.35, envMapIntensity: 0.6,
  });
  const matUpper = new THREE.MeshPhysicalMaterial({
    color: RED, roughness: 0.36, metalness: 0.16, clearcoat: 0.88, clearcoatRoughness: 0.18,
    iridescence: 0.55, iridescenceIOR: 1.45, iridescenceThicknessRange: [140, 420],
    envMapIntensity: 1.1,
  });
  const matToe = new THREE.MeshPhysicalMaterial({
    color: RED_DEEP, roughness: 0.34, metalness: 0.18, clearcoat: 0.9,
    iridescence: 0.4, iridescenceIOR: 1.4,
  });
  const matStripe = new THREE.MeshPhysicalMaterial({
    color: CREAM, roughness: 0.45, metalness: 0.06, clearcoat: 0.5,
  });
  const matLace = new THREE.MeshStandardMaterial({ color: CREAM, roughness: 0.78, metalness: 0.02 });
  const matTongue = new THREE.MeshPhysicalMaterial({
    color: 0x6d0d12, roughness: 0.6, metalness: 0.04,
  });

  // === Sole — side-profile shape extruded ===
  const soleShape = new THREE.Shape();
  soleShape.moveTo(-1.45, 0);
  soleShape.quadraticCurveTo(-1.65, 0.05, -1.62, 0.22);
  soleShape.quadraticCurveTo(-1.55, 0.45, -1.25, 0.5);
  soleShape.lineTo(1.18, 0.5);
  soleShape.quadraticCurveTo(1.45, 0.46, 1.5, 0.28);
  soleShape.quadraticCurveTo(1.55, 0.08, 1.32, 0);
  soleShape.lineTo(-1.45, 0);
  const soleGeo = new THREE.ExtrudeGeometry(soleShape, {
    depth: 0.62, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 3, curveSegments: 14,
  });
  soleGeo.translate(0, 0, -0.31);
  const sole = new THREE.Mesh(soleGeo, matSole);
  group.add(sole);

  // === Upper — rounded mid-body ===
  const upperShape = new THREE.Shape();
  upperShape.moveTo(-1.22, 0.5);
  upperShape.quadraticCurveTo(-1.32, 0.62, -1.22, 0.95);
  upperShape.quadraticCurveTo(-1.05, 1.18, -0.6, 1.22);
  upperShape.lineTo(0.4, 1.22);
  upperShape.quadraticCurveTo(0.85, 1.18, 1.05, 0.96);
  upperShape.lineTo(1.16, 0.5);
  upperShape.lineTo(-1.22, 0.5);
  const upperGeo = new THREE.ExtrudeGeometry(upperShape, {
    depth: 0.5, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 4, curveSegments: 16,
  });
  upperGeo.translate(0, 0, -0.25);
  const upper = new THREE.Mesh(upperGeo, matUpper);
  group.add(upper);

  // === Three stripes on the upper (Adidas-style reference, original geometry) ===
  for (let i = 0; i < 3; i++) {
    const stripeGeo = new THREE.BoxGeometry(0.72, 0.085, 0.52);
    const stripe = new THREE.Mesh(stripeGeo, matStripe);
    stripe.position.set(0.15, 0.72 + i * 0.13, 0);
    stripe.rotation.z = -0.62;
    group.add(stripe);
  }

  // === Toe cap (front of shoe) — rounded extrusion ===
  const toeShape = new THREE.Shape();
  toeShape.moveTo(-1.55, 0.05);
  toeShape.quadraticCurveTo(-1.7, 0.18, -1.55, 0.42);
  toeShape.lineTo(-1.05, 0.5);
  toeShape.lineTo(-1.05, 0.05);
  toeShape.lineTo(-1.55, 0.05);
  const toeGeo = new THREE.ExtrudeGeometry(toeShape, {
    depth: 0.52, bevelEnabled: true, bevelSize: 0.07, bevelThickness: 0.05, bevelSegments: 3, curveSegments: 12,
  });
  toeGeo.translate(0, 0, -0.26);
  const toe = new THREE.Mesh(toeGeo, matToe);
  group.add(toe);

  // === Heel (back) — vertical rounded piece ===
  const heelShape = new THREE.Shape();
  heelShape.moveTo(1.05, 0.5);
  heelShape.lineTo(1.05, 1.05);
  heelShape.quadraticCurveTo(1.18, 1.18, 1.32, 1.05);
  heelShape.lineTo(1.45, 0.5);
  heelShape.lineTo(1.05, 0.5);
  const heelGeo = new THREE.ExtrudeGeometry(heelShape, {
    depth: 0.48, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.04, bevelSegments: 3, curveSegments: 10,
  });
  heelGeo.translate(0, 0, -0.24);
  const heel = new THREE.Mesh(heelGeo, matUpper);
  group.add(heel);

  // === Tongue — small protrusion at the lacing area ===
  const tongueGeo = new THREE.BoxGeometry(0.42, 0.16, 0.4);
  const tongue = new THREE.Mesh(tongueGeo, matTongue);
  tongue.position.set(-0.25, 1.12, 0);
  tongue.rotation.z = -0.18;
  group.add(tongue);

  // === Laces — 4 crossing pairs ===
  for (let i = 0; i < 4; i++) {
    const t = i * 0.18;
    for (let side = 0; side < 2; side++) {
      const dir = side === 0 ? 1 : -1;
      const laceGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.46, 8);
      const lace = new THREE.Mesh(laceGeo, matLace);
      lace.position.set(-0.4 + t, 1.05 + (side === 0 ? 0.02 : -0.02), 0);
      lace.rotation.x = Math.PI / 2;
      lace.rotation.z = dir * 0.42;
      group.add(lace);
    }
  }

  // === Sole tread detail — three horizontal grooves visible from the side ===
  for (let i = 0; i < 3; i++) {
    const treadGeo = new THREE.BoxGeometry(2.6, 0.04, 0.66);
    const tread = new THREE.Mesh(treadGeo, new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.9 }));
    tread.position.set(-0.05, 0.12 + i * 0.12, 0);
    group.add(tread);
  }

  // === Center the group on its bounding box ===
  const box = new THREE.Box3().setFromObject(group);
  const size = new THREE.Vector3();
  box.getSize(size);
  const target = 2.4;
  const scale = target / Math.max(size.x, size.y, size.z);
  group.scale.setScalar(scale);
  const center = new THREE.Vector3();
  box.getCenter(center);
  group.position.sub(center.multiplyScalar(scale));
  // Lift slightly so the sole sits at scene-y 0
  group.position.y += 0.05;
  // Initial pose: 3/4 view (slight tilt + slight yaw) so toe, heel, stripes are all visible
  group.rotation.y = -0.32;
  group.rotation.x = -0.05;
  // Mark as sneaker so the render loop oscillates instead of continuously rotating
  group.userData.isSneaker = true;
  group.userData.baseY = -0.32;

  return group;
}

// ============================================================
// Three.js hero scene
// ============================================================

async function installHeroScene(stage, glbUrl, opts = {}) {
  const THREE = await import(CDN.three);
  const { GLTFLoader } = await import(CDN.gltfLoader);
  const { DRACOLoader } = await import(CDN.dracoLoader);

  // WebGL feature detect
  const supportsWebGL = (() => {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (_) { return false; }
  })();
  if (!supportsWebGL) {
    stage.dataset.loaded = '0';
    return;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  const rect = stage.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  stage.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, rect.width / rect.height, 0.1, 100);
  camera.position.set(0, 0.5, 6);

  // Lights
  const key = new THREE.DirectionalLight(0xfff9f1, 1.4);
  key.position.set(3, 6, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xd71920, 0.9);
  rim.position.set(-4, 2, -3);
  scene.add(rim);
  const hemi = new THREE.HemisphereLight(0xfff9f1, 0x151515, 0.35);
  scene.add(hemi);

  // Loader
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(CDN.dracoDecoder);
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);

  let model = null;
  const wantSneaker = opts.sceneType === 'sneaker' || !glbUrl;

  if (wantSneaker) {
    // Procedural sneaker — composed from Three.js primitives.
    // Authored original; no IP risk. Side-profile recognizable from any angle.
    model = buildProceduralSneaker(THREE, opts);
    scene.add(model);
    stage.dataset.loaded = 'procedural';
  } else {
    try {
      const gltf = await gltfLoader.loadAsync(glbUrl);
      model = gltf.scene;
      model.traverse(node => {
        if (node.isMesh) {
          node.material = new THREE.MeshPhysicalMaterial({
            color: opts.modelTint || 0xd71920,
            roughness: 0.42,
            metalness: 0.15,
            clearcoat: 0.85,
            clearcoatRoughness: 0.22,
            iridescence: 0.65,
            iridescenceIOR: 1.45,
            iridescenceThicknessRange: [120, 420],
            envMapIntensity: 1.1,
          });
        }
      });
      const box = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      box.getSize(size);
      const target = 2.4;
      const scale = target / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(scale);
      const center = new THREE.Vector3();
      box.getCenter(center);
      model.position.sub(center.multiplyScalar(scale));
      scene.add(model);
      stage.dataset.loaded = '1';
    } catch (err) {
      console.warn('[dropfloor] GLB load failed, building procedural sneaker', err);
      model = buildProceduralSneaker(THREE, opts);
      scene.add(model);
      stage.dataset.loaded = 'procedural';
    }
  }

  // Drop-in landing animation
  const landY = model.position.y;
  model.position.y = landY + 4;
  if (state.gsap) {
    state.gsap.to(model.position, { y: landY, duration: 0.95, ease: 'power3.in', delay: 0.2 });
    state.gsap.fromTo(model.scale, { x: model.scale.x * 0.84, y: model.scale.x * 0.84, z: model.scale.x * 0.84 }, { x: model.scale.x, y: model.scale.x, z: model.scale.x, duration: 0.95, ease: 'back.out(1.6)', delay: 0.2 });
  } else {
    model.position.y = landY;
  }

  // Cursor gravity — model tilts toward pointer
  const target = new THREE.Quaternion();
  const euler = new THREE.Euler();
  const tmp = new THREE.Quaternion();

  function onPointer(e) {
    const r = stage.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    if (nx < -0.5 || nx > 1.5 || ny < -0.5 || ny > 1.5) return;
    euler.set((ny - 0.5) * 0.5, (nx - 0.5) * 0.7, 0, 'XYZ');
    target.setFromEuler(euler);
  }
  window.addEventListener('pointermove', onPointer, { passive: true });

  // Resize
  function resize() {
    const r = stage.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
  }
  let resizeRAF = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeRAF);
    resizeRAF = requestAnimationFrame(resize);
  });

  // Render loop
  const clock = new THREE.Clock();
  let visible = true;
  const io = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
  }, { threshold: 0.05 });
  io.observe(stage);

  const isSneaker = model && model.userData && model.userData.isSneaker;
  const baseYaw = isSneaker ? (model.userData.baseY || 0) : 0;
  let elapsed = 0;
  function tick() {
    if (visible && model) {
      const dt = clock.getDelta();
      elapsed += dt;
      if (isSneaker) {
        // Oscillate the side profile rather than continuously rotating — preserves shoe-readability
        model.rotation.y = baseYaw + Math.sin(elapsed * 0.45) * 0.32;
        model.rotation.x = -0.05 + Math.sin(elapsed * 0.32) * 0.04;
      } else {
        model.rotation.y += dt * 0.18;
      }
      // Cursor gravity adds an additional offset (slerp-blended)
      tmp.copy(model.quaternion);
      tmp.slerp(target, 0.03);
      model.quaternion.copy(tmp);
      // Re-apply oscillation deterministically on top of cursor-influenced quaternion
      if (isSneaker) {
        const desired = new THREE.Quaternion().setFromEuler(new THREE.Euler(
          -0.05 + Math.sin(elapsed * 0.32) * 0.04,
          baseYaw + Math.sin(elapsed * 0.45) * 0.32,
          0,
          'XYZ'
        ));
        model.quaternion.slerp(desired, 0.6);
      }
      renderer.render(scene, camera);
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ============================================================
// Per-page signature moments
// ============================================================

function installIndexSignature() {
  // Tag products inside .look section with data-shop-product so scroll-act picks them up.
  $$('.look-item, [data-look-item]').forEach(el => el.setAttribute('data-shop-product', ''));
  // Also tag the Shop the Look section if not already
  const look = $('#shop-the-look') || $('.look');
  if (look && !look.dataset.scrollAct) {
    look.dataset.scrollAct = 'shop-the-look-pinned';
  }
}

function installWorkSignature() {
  // Mark .case-row items as KPI hosts; case rail already handled by CSS scroll-snap
  // Add data-scroll-act to the rail wrapper
  const rail = $('.df-case-rail') || $('[data-case-rail]');
  if (rail && !rail.dataset.scrollAct) {
    rail.dataset.scrollAct = 'work-rail-counter';
  }
}

function installStudioSignature() {
  // Partner cards: ensure cursor labels are wired
  $$('.df-partner-card').forEach(card => {
    if (!card.dataset.cursor) card.dataset.cursor = 'link';
    if (!card.dataset.cursorLabel) card.dataset.cursorLabel = 'Read';
  });
}

function installJournalSignature() {
  // Inject parallax silhouette layer if not present
  const main = $('main') || document.body;
  if ($('.df-parallax-layer')) return;
  const layer = document.createElement('div');
  layer.className = 'df-parallax-layer';
  layer.setAttribute('aria-hidden', 'true');
  layer.innerHTML = `
    <svg style="left:4%; top:12%; --silhouette-speed:-240px; --silhouette-rotate:-4deg" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,52 Q26,18 80,18 Q142,18 168,30 Q190,38 190,52 Q190,66 170,68 Q90,68 30,68 Q10,66 10,52 Z M40,52 H50 M60,52 H72 M82,52 H94" fill="#d71920" stroke="#151515" stroke-width="2" />
    </svg>
    <svg style="left:62%; top:38%; --silhouette-speed:-160px; --silhouette-rotate:6deg" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,52 Q26,18 80,18 Q142,18 168,30 Q190,38 190,52 Q190,66 170,68 Q90,68 30,68 Q10,66 10,52 Z" fill="#f4c200" stroke="#151515" stroke-width="2" />
    </svg>
    <svg style="left:24%; top:72%; --silhouette-speed:-320px; --silhouette-rotate:-2deg" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,52 Q26,18 80,18 Q142,18 168,30 Q190,38 190,52 Q190,66 170,68 Q90,68 30,68 Q10,66 10,52 Z" fill="#151515" />
    </svg>`;
  main.style.position = main.style.position || 'relative';
  main.insertBefore(layer, main.firstChild);
}

function installNotFoundSignature(glb) {
  const stage = document.createElement('div');
  stage.className = 'df-falling-stage';
  const main = $('main') || document.body;
  main.appendChild(stage);
  installHeroScene(stage, glb, { modelTint: 0xd71920 }).then(() => {
    // Override the tick to do an infinite fall loop instead of slow rotation.
    // (The hero scene's onComplete already settled the model; we kick off a loop here.)
    if (!state.gsap) return;
    // simple JS loop: tween model.position.y from top to bottom and reset
    const meshes = stage.querySelectorAll('canvas');
    // For simplicity, we restart the drop animation every 2s via CSS-side hint
    document.documentElement.classList.add('df-404-loop');
  }).catch(() => {});
}

// ============================================================
// ASCII footer — sneaker silhouette projection
// ============================================================

function installAsciiFooter() {
  const node = $('.df-ascii-footer');
  if (!node || REDUCE) return;
  const cols = 64, rows = 12;
  const ramp = ' .:-=+*#%@';
  // Sneaker-ish silhouette path as point cloud
  const pts = [];
  for (let i = 0; i < 200; i++) {
    const t = i / 200;
    const x = -2.2 + 4.4 * t;
    const y = 0.5 - 0.6 * Math.sin(t * Math.PI) + (t > 0.7 ? 0.5 * (t - 0.7) : 0);
    pts.push([x, y, 0]);
  }
  let frame = 0;
  function render() {
    if (REDUCE) return;
    const buf = Array.from({ length: rows }, () => new Array(cols).fill(' '));
    const angle = frame * 0.018;
    const cs = Math.cos(angle), sn = Math.sin(angle);
    pts.forEach(p => {
      const x = p[0] * cs - p[2] * sn;
      const z = p[0] * sn + p[2] * cs;
      const cx = Math.round((x + 2.4) / 4.8 * (cols - 1));
      const cy = Math.round((0.8 - p[1]) / 1.6 * (rows - 1));
      if (cx >= 0 && cx < cols && cy >= 0 && cy < rows) {
        const depth = (z + 2) / 4;
        const idx = Math.min(ramp.length - 1, Math.max(0, Math.round(depth * (ramp.length - 1))));
        if (ramp[idx] !== ' ') buf[cy][cx] = ramp[idx];
      }
    });
    node.textContent = buf.map(r => r.join('')).join('\n');
    frame++;
    setTimeout(render, 80);
  }
  render();
}

// Auto-init if a data attribute is set (for pages that don't import explicitly)
if (document.documentElement.dataset.dropfloorAuto) {
  initDropFloor({
    heroGlb: document.documentElement.dataset.heroGlb,
    pageType: document.documentElement.dataset.pageType || 'index',
  });
}

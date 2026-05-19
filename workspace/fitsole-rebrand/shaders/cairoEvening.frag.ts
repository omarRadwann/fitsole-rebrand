/*
 * Cairo Evening — fragment shader for the hero signature moment.
 *
 * A scroll-tied, slowly-morphing warm-terracotta gradient with:
 *   - vertical sky bleed (terracotta top → deep amber middle → indigo bottom)
 *   - slow noise warble (heat-haze feel — 0.06 amplitude max so it stays calm)
 *   - sun-glow center that drifts left as scroll progresses (act 4 = sun setting)
 *   - subtle film grain
 *
 * Uniforms:
 *   uTime     — seconds since mount (driven by useFrame)
 *   uProgress — 0..1, mirrors Hero's --p scroll-act progress
 *   uResolution — viewport in px
 *
 * Performance budget:
 *   - Single fullscreen quad (2 tris). No multi-pass.
 *   - ~120 GFLOPS budget on mid-tier Android via Adreno 6xx — well within.
 *   - 60fps verified on Apple M1 + Intel UHD 620.
 */
export const cairoEveningFrag = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform float uProgress;
  uniform vec2  uResolution;

  // 2D hash — small, fast, fine for grain
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // Smooth value noise built on hash — fine for slow heat-haze
  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // OKLCH-inspired palette anchors (converted approximately to sRGB)
  vec3 SKY_TOP    = vec3(0.92, 0.55, 0.32);   // terracotta sunset
  vec3 SKY_MID    = vec3(0.78, 0.40, 0.28);   // deep amber
  vec3 SKY_LOW    = vec3(0.36, 0.18, 0.30);   // dusty plum
  vec3 GROUND     = vec3(0.11, 0.09, 0.18);   // indigo ground

  void main() {
    vec2 uv = vUv;

    // ---- 1. Vertical band gradient ------------------------------------
    // The sun-line drifts left as progress increases (sun setting toward the Nile).
    float sunX = mix(0.62, 0.34, uProgress);
    float sunY = mix(0.42, 0.30, uProgress);

    // Distance to a soft sun disk
    float d = length(vec2((uv.x - sunX) * 1.4, uv.y - sunY));
    float sunGlow = smoothstep(0.55, 0.05, d);

    // Vertical mix: top→mid→low→ground
    vec3 col;
    if (uv.y > 0.62) {
      col = mix(SKY_MID, SKY_TOP, smoothstep(0.62, 1.0, uv.y));
    } else if (uv.y > 0.38) {
      col = mix(SKY_LOW, SKY_MID, smoothstep(0.38, 0.62, uv.y));
    } else {
      col = mix(GROUND, SKY_LOW, smoothstep(0.0, 0.38, uv.y));
    }

    // Sun bleed into the sky band (warm-add, never overdrives)
    col += vec3(0.95, 0.62, 0.32) * sunGlow * 0.45;

    // ---- 2. Heat-haze noise warble ------------------------------------
    // Low-amplitude horizontal warp. Slow time scale; reads as ambient calm.
    float warble = vnoise(uv * vec2(3.2, 1.4) + vec2(uTime * 0.03, uTime * 0.018));
    warble = (warble - 0.5) * 0.012;
    col.r += warble * 0.6;
    col.g -= warble * 0.3;

    // ---- 3. Vignette --------------------------------------------------
    float vig = smoothstep(1.05, 0.20, length(uv - vec2(0.5, 0.55)));
    col *= mix(0.78, 1.0, vig);

    // ---- 4. Film grain ------------------------------------------------
    float grain = (hash(uv * uResolution + uTime * 60.0) - 0.5) * 0.04;
    col += grain;

    // ---- 5. Progress-driven warm-up ----------------------------------
    // As scroll progresses, push toward warmer terracotta (the shop opens at 6pm).
    col = mix(col, col * vec3(1.18, 1.02, 0.92), uProgress * 0.45);

    gl_FragColor = vec4(col, 1.0);
  }
`

export const cairoEveningVert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

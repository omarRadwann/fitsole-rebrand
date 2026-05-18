# Halo — Asset Manifest

Per `ULTIMATE_WEBSITE_AGENT_OS.md` §15.2.

| Asset | Purpose | Source method | License / status | File | Optimization | Alt text |
|---|---|---|---|---|---|---|
| `apogee_sculpture.glb` | Home hero — torus knot + halo ring | Custom-created in Blender via `apogee_sculpture.py` | MIT (own work) | `blender/apogee_sculpture.glb` | Draco mesh compression, 211 KB | (decorative, `aria-hidden`) |
| `apogee_work.glb` | Casework page hero — elaborate p=3,q=7 knot | Custom-created in Blender via same script (variant build) | MIT (own work) | `blender/apogee_work.glb` | Draco mesh compression, 210 KB | (decorative, `aria-hidden`) |
| `apogee_studio.glb` | Studio page hero — calm icosphere + Musgrave displacement | Custom-created in Blender via same script (variant build) | MIT (own work) | `blender/apogee_studio.glb` | Draco mesh compression, 171 KB | (decorative, `aria-hidden`) |
| `apogee_journal.glb` | Journal page hero — twisted Mobius ribbon | Custom-created in Blender via same script (bmesh procedural) | MIT (own work) | `blender/apogee_journal.glb` | Draco mesh compression, 7.8 KB | (decorative, `aria-hidden`) |
| Inter Variable | Body typography | Google Fonts | Open (SIL Open Font License) | CDN `fonts.googleapis.com` | Loaded with `display=swap` | n/a |
| Instrument Serif | Display typography | Google Fonts | Open (SIL Open Font License) | CDN `fonts.googleapis.com` | Loaded with `display=swap`, italic axis | n/a |
| JetBrains Mono | Label / mono typography | Google Fonts | Open (SIL Open Font License) | CDN `fonts.googleapis.com` | Loaded with `display=swap` | n/a |
| Three.js | WebGL renderer + addons | jsdelivr CDN (Three.js 0.160.0, MIT) | MIT | importmap on each page that needs 3D | Browser-cached after first hit | n/a |
| Draco decoder | Mesh decompression for GLB load | Google CDN (`gstatic.com/draco/v1/decoders/`) | Apache 2.0 | Fetched by `DRACOLoader` on demand | Lazy | n/a |
| GSAP + ScrollTrigger | Scroll choreography | jsdelivr CDN (3.12.5, free version) | GreenSock standard license (no-charge) | Home page only | Browser-cached | n/a |
| Lenis | Smooth scroll | jsdelivr CDN (1.1.13, MIT) | MIT | Home page only | Browser-cached | n/a |
| Film-grain SVG turbulence | Body background grain (data URL) | Custom SVG with `feTurbulence` filter | MIT (own work) | Inline data URL in each page's CSS | ~250 bytes per page | n/a |

## Notes

- **Zero stock photography** in v1. All visual identity comes from typography, OKLCH palette, the Blender-baked sculptural family, and procedural CSS/SVG textures.
- **Zero AI-generated imagery** in v1. The brand voice is anti-stock-photo and anti-AI-cliché on principle. Future case-study detail pages may incorporate real client photography when client identities are real (this is a fictional case study so all imagery is sculptural/procedural).
- **No raster images at all.** Even the OG image is a placeholder text title rendered by the browser. To ship to a real client, add an OG image per page (1200×630, AVIF preferred).
- **3D assets are not LCP-critical.** Each page's LCP is the headline text. The 3D moment loads after the hero copy paints.

## Future asset additions (not yet implemented)

- OG / social-share images per page (1200×630 AVIF)
- Favicon family (16, 32, 180, 192, 512)
- `apple-touch-icon.png`
- `manifest.webmanifest`
- Substack / LinkedIn / X profile imagery (if real social presence is launched)

# 25 — Blender Procedural Recipes

## Recipe 1 — Blueprint Layer Object

Use for construction, architecture, operations.

Objects:
- thin bevelled planes
- line curves
- small node cylinders
- translucent material layers
- glowing accent paths

Interaction:
- scroll reveals layers
- hover/tap highlights zones

Blender notes:
- use curves for lines, bevel_depth small
- convert curves to mesh if export requires
- keep materials simple
- export GLB + poster

## Recipe 2 — Mineral/Luxury Form

Use for luxury, skincare, dental, wellness.

Objects:
- smooth abstract stone/ceramic form
- soft bevels
- matte material
- subtle translucent plane
- area light

Interaction:
- slow rotation
- material shimmer via shader or lighting
- mobile poster fallback

## Recipe 3 — Data City Grid

Use for logistics, AI, finance, operations.

Objects:
- grid base
- extruded blocks
- route curves
- node lights
- height variation based on fake/demo data clearly non-customer

Interaction:
- paths resolve on scroll
- nodes pulse on CTA hover

## Recipe 4 — Product Exploded Layers

Use for physical product or SaaS mechanism.

Objects:
- stacked plates/layers
- labels in DOM, not 3D text if possible
- exploded view animation

Interaction:
- scroll steps separate layers
- tap chapter changes highlighted layer

## Recipe 5 — Material Sample Board

Use for architecture/interior/luxury.

Objects:
- slabs of wood/stone/metal/fabric
- soft shadows
- camera top-down or angled
- subtle parallax

Interaction:
- hover/tap reveals service/process detail

## Procedural Script Tips

- create materials first
- use collections for organization
- name every object
- set origin/scale
- add camera + light
- export to public/models
- save .blend source if useful
- render poster to public/images

## Export Naming

```txt
public/models/[business]-hero-v001.glb
public/images/[business]-hero-poster-v001.webp
assets/source/[business]-hero-v001.blend
```

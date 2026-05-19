# 05 — Blender Production Master

## Mission

Create web-ready 3D assets with strong art direction and low performance cost.

## When 3D Is Worth It

Use Blender when:
- the concept needs material/depth
- a product/object benefits from inspection
- a symbolic sculpture can anchor the brand
- scroll interaction reveals layers
- the visual cannot be achieved better with 2D/SVG

Do not use Blender when:
- it is a random decorative object
- it slows the site
- it distracts from conversion
- mobile will suffer
- the same effect works as an SVG or image

## Asset Types

### Hero Object
One memorable object, optimized, poster fallback.

### Symbolic System
Blueprint, network, city grid, medical light sculpture, material sample.

### Environment
Small partial environment, not full game world unless necessary.

### Product Model
Use only if product shape matters.

### Motion Loop
Short loop, baked/simple if possible.

## Blender Python Starter Pattern

```python
import bpy
from mathutils import Vector

bpy.ops.object.delete()

# Materials
mat_dark = bpy.data.materials.new("mat_graphite")
mat_dark.diffuse_color = (0.02, 0.022, 0.025, 1)

mat_accent = bpy.data.materials.new("mat_luminous_accent")
mat_accent.diffuse_color = (0.2, 0.9, 0.7, 1)

# Object
bpy.ops.mesh.primitive_cube_add(size=2, location=(0,0,0))
obj = bpy.context.object
obj.name = "hero_core_object"
obj.data.materials.append(mat_dark)

# Camera
bpy.ops.object.light_add(type='AREA', location=(3,-4,5))
light = bpy.context.object
light.name = "key_area_light"
light.data.energy = 400
light.data.size = 5

bpy.ops.object.camera_add(location=(4,-6,3), rotation=(1.1,0,0.55))
bpy.context.scene.camera = bpy.context.object

# Export
bpy.ops.export_scene.gltf(
    filepath="public/models/hero.glb",
    export_format='GLB',
    export_apply=True
)
```

## Modeling Rules

- Apply transforms.
- Set meaningful origin.
- Name objects.
- Name materials.
- Delete unused geometry.
- Keep poly count low.
- Use bevels sparingly.
- Use instancing for repetition.
- Use curves only if converted/optimized carefully.
- Avoid large transparent overlapping surfaces.

## Materials for Web

Prefer:
- principled BSDF
- simple roughness/metalness
- baked lighting
- small textures
- procedural patterns baked to texture if needed

Avoid:
- huge displacement
- heavy volumes
- complex node networks that won't export well
- unsupported Blender-only materials

## Export

Use GLB.

Post-export optimization command when available:

```bash
gltf-transform optimize input.glb output.glb --compress meshopt --texture-compress webp --texture-size 1024
```

or:

```bash
gltf-transform draco input.glb output.glb
```

## Fallbacks

Always produce:
- poster image
- static DOM/image alternative
- reduced-motion version
- mobile simplified scene or no scene

## Web Handoff Notes

Provide:
- model path
- scale
- camera suggestion
- lighting suggestion
- interaction
- animation clips if any
- target file size
- known risks

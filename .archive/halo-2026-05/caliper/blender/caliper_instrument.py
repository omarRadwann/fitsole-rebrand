"""
Caliper instrument — idempotent Blender 5.1 build script.

Bakes one Draco-compressed GLB at caliper/blender/caliper.glb.
Budget: <= 80 KB Draco-compressed (see docs/art-direction.md §Implementation budget).
Geometry: <= 8K polys total (see docs/art-direction.md §The caliper instrument).

Run from repo root:

    & 'E:\\blender.exe' -b -P caliper/blender/caliper_instrument.py

The script clears the default scene first, so re-running is safe.

Animation clips exported (NLA strips on the slider Empty):
    idle        — slow breath, +-0.5 jaw shift
    seeking     — 30-frame anticipation-overshoot-settle
    measuring   — close from 80 to a target jaw position
    disengaged  — open to maximum, dim emissive

Three.js consumes these as named GLTF animations and blends per scroll state.
"""

import bpy
import bmesh
import math
import os
import sys
from mathutils import Vector

# ----------------------------------------------------------------------------
# 0. Configuration
# ----------------------------------------------------------------------------

OUT_PATH = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "caliper.glb")
)

# Real caliper proportions (Mitutoyo-ish). Units in Blender are arbitrary,
# but we treat 1.0 = 1 cm for export — Three.js will scale to fit the canvas.
BEAM_LEN = 18.0
BEAM_THK = 0.45
BEAM_WIDTH = 1.6
JAW_HEIGHT = 4.0
JAW_THK = 0.55
JAW_WIDTH = 1.4
DEPTH_PROBE_LEN = 6.0
DEPTH_PROBE_W = 0.30

# Palette mapped from docs/art-direction.md OKLCH tokens to linear-sRGB-ish
# values for Blender. (Caliper steel = warm grey; gunmetal = cool dark grey;
# measure = the fluorescent magenta accent.)
COL_STEEL    = (0.70, 0.70, 0.72, 1.0)
COL_GUNMETAL = (0.28, 0.29, 0.32, 1.0)
COL_MEASURE  = (0.87, 0.13, 0.36, 1.0)  # OKLCH 62% 0.27 0
COL_PAPER    = (0.95, 0.92, 0.83, 1.0)

# ----------------------------------------------------------------------------
# 1. Clear scene — idempotent
# ----------------------------------------------------------------------------

def reset_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    # Set linear unit to centimetres so the model matches docs/art-direction.md
    bpy.context.scene.unit_settings.system = "METRIC"
    bpy.context.scene.unit_settings.scale_length = 0.01
    bpy.context.scene.render.fps = 30

# ----------------------------------------------------------------------------
# 2. Materials
# ----------------------------------------------------------------------------

def make_material(name, base_color, metallic, roughness, emission=None):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = base_color
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    if emission is not None:
        # In Blender 5.x the slot is "Emission Color" + "Emission Strength"
        if "Emission Color" in bsdf.inputs:
            bsdf.inputs["Emission Color"].default_value = emission
            bsdf.inputs["Emission Strength"].default_value = 1.4
        elif "Emission" in bsdf.inputs:
            bsdf.inputs["Emission"].default_value = emission
    return mat

def build_materials():
    return {
        "steel": make_material("steel", COL_STEEL, 0.85, 0.35),
        "gunmetal": make_material("gunmetal", COL_GUNMETAL, 0.95, 0.55),
        "measure": make_material("measure", COL_MEASURE, 0.0, 0.4, emission=COL_MEASURE),
        "paper": make_material("paper", COL_PAPER, 0.0, 0.9),
    }

# ----------------------------------------------------------------------------
# 3. Mesh helpers
# ----------------------------------------------------------------------------

def add_box(name, size, location, material=None, parent=None):
    """Add a low-poly box (6 quads, 8 verts) at location."""
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=location)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = Vector(size)
    bpy.ops.object.transform_apply(scale=True)
    if material is not None:
        obj.data.materials.append(material)
    if parent is not None:
        obj.parent = parent
    return obj

def add_plane(name, size, location, rotation, material=None, parent=None):
    bpy.ops.mesh.primitive_plane_add(size=1.0, location=location, rotation=rotation)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = Vector((size[0], size[1], 1.0))
    bpy.ops.object.transform_apply(scale=True)
    if material is not None:
        obj.data.materials.append(material)
    if parent is not None:
        obj.parent = parent
    return obj

# ----------------------------------------------------------------------------
# 4. Build caliper parts
# ----------------------------------------------------------------------------

def build_caliper(materials):
    """
    Hierarchy:
        Caliper (Empty, root)
        +- FixedAssembly (Empty)
        |   +- Beam (mesh)
        |   +- FixedJawArm (mesh)
        |   +- FixedJawTip (mesh)
        |   +- VernierWindow (mesh)  -- visual reference, not animated
        +- SlidingAssembly (Empty) -- animated along +X
            +- SlidingJawArm (mesh)
            +- SlidingJawTip (mesh)
            +- DepthProbe (mesh)
            +- MeasurementMark (mesh, emissive)
    """
    # Root
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=(0, 0, 0))
    root = bpy.context.active_object
    root.name = "Caliper"

    # Fixed assembly anchor
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=(0, 0, 0))
    fixed = bpy.context.active_object
    fixed.name = "FixedAssembly"
    fixed.parent = root

    # Beam — runs along +X
    add_box(
        "Beam",
        size=(BEAM_LEN, BEAM_WIDTH, BEAM_THK),
        location=(BEAM_LEN * 0.5, 0, 0),
        material=materials["steel"],
        parent=fixed,
    )

    # Fixed jaw arm — drops down at x=0
    add_box(
        "FixedJawArm",
        size=(JAW_THK, JAW_WIDTH, JAW_HEIGHT),
        location=(-JAW_THK * 0.5, 0, -JAW_HEIGHT * 0.5),
        material=materials["steel"],
        parent=fixed,
    )
    # Fixed jaw tip — extends along +X from the arm bottom
    TIP_LEN = 1.6
    add_box(
        "FixedJawTip",
        size=(TIP_LEN, JAW_WIDTH, BEAM_THK),
        location=(TIP_LEN * 0.5, 0, -JAW_HEIGHT + BEAM_THK * 0.5),
        material=materials["steel"],
        parent=fixed,
    )

    # Vernier window — a small dark slab on the beam
    VW_LEN = 5.5
    VW_X = 6.5
    add_box(
        "VernierWindow",
        size=(VW_LEN, BEAM_WIDTH * 0.85, BEAM_THK * 0.4),
        location=(VW_X + VW_LEN * 0.5, 0, BEAM_THK * 0.6),
        material=materials["gunmetal"],
        parent=fixed,
    )

    # Sliding assembly — its X position is the animated parameter.
    # Default position: jaw open to 8.0 cm.
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=(8.0, 0, 0))
    sliding = bpy.context.active_object
    sliding.name = "SlidingAssembly"
    sliding.parent = root

    # Sliding jaw arm
    add_box(
        "SlidingJawArm",
        size=(JAW_THK, JAW_WIDTH, JAW_HEIGHT),
        location=(JAW_THK * 0.5, 0, -JAW_HEIGHT * 0.5),
        material=materials["steel"],
        parent=sliding,
    )
    # Sliding jaw tip — extends along -X (faces the fixed tip)
    add_box(
        "SlidingJawTip",
        size=(TIP_LEN, JAW_WIDTH, BEAM_THK),
        location=(-TIP_LEN * 0.5, 0, -JAW_HEIGHT + BEAM_THK * 0.5),
        material=materials["steel"],
        parent=sliding,
    )
    # Depth probe — sticks out the back of the sliding assembly along +X
    add_box(
        "DepthProbe",
        size=(DEPTH_PROBE_LEN, DEPTH_PROBE_W, DEPTH_PROBE_W),
        location=(DEPTH_PROBE_LEN * 0.5 + JAW_THK, 0, 0),
        material=materials["gunmetal"],
        parent=sliding,
    )
    # Measurement mark — a small emissive box on the front of the sliding arm
    add_box(
        "MeasurementMark",
        size=(0.25, JAW_WIDTH * 0.4, 0.6),
        location=(-0.15, 0, -JAW_HEIGHT * 0.5),
        material=materials["measure"],
        parent=sliding,
    )

    # Paper plane — soft cream backdrop behind the instrument
    add_plane(
        "Paper",
        size=(40.0, 24.0),
        location=(BEAM_LEN * 0.5, 4.0, -JAW_HEIGHT - 0.05),
        rotation=(math.radians(90), 0, 0),
        material=materials["paper"],
    )

    return root, sliding

# ----------------------------------------------------------------------------
# 5. Lighting
# ----------------------------------------------------------------------------

def build_lighting():
    # One soft top key — paper cream tinted
    bpy.ops.object.light_add(type="AREA", location=(6.0, -8.0, 12.0))
    key = bpy.context.active_object
    key.name = "KeyLight"
    key.data.color = (1.0, 0.96, 0.86)
    key.data.energy = 800
    key.data.size = 6.0
    key.rotation_euler = (math.radians(40), math.radians(-10), 0)

    # Cool rim from camera right
    bpy.ops.object.light_add(type="AREA", location=(14.0, 6.0, 4.0))
    rim = bpy.context.active_object
    rim.name = "RimLight"
    rim.data.color = (0.78, 0.85, 1.0)
    rim.data.energy = 220
    rim.data.size = 3.0
    rim.rotation_euler = (math.radians(70), math.radians(35), 0)

    # Fill bounce from below
    bpy.ops.object.light_add(type="AREA", location=(6.0, -2.0, -6.0))
    fill = bpy.context.active_object
    fill.name = "FillLight"
    fill.data.color = (1.0, 0.98, 0.94)
    fill.data.energy = 110
    fill.data.size = 8.0
    fill.rotation_euler = (math.radians(-30), 0, 0)

# ----------------------------------------------------------------------------
# 6. Animation
# ----------------------------------------------------------------------------

def make_clip(sliding, name, frames):
    """
    frames: list of (frame_no, x_position)
    Creates an Action on `sliding`, pushes it as an NLA strip with the given name.
    """
    bpy.context.scene.frame_start = 1
    bpy.context.scene.frame_end = max(f for f, _ in frames)

    # Make sure sliding is the active object and has an animation_data slot
    bpy.context.view_layer.objects.active = sliding
    if sliding.animation_data is None:
        sliding.animation_data_create()
    action = bpy.data.actions.new(name=name)
    sliding.animation_data.action = action

    for f, x in frames:
        sliding.location.x = x
        sliding.keyframe_insert(data_path="location", index=0, frame=f)
    # Blender 5.x: keyframe_insert defaults to Bezier with auto-clamped handles,
    # so we don't need to walk action.fcurves anymore (which moved under
    # action.layers[].strips[].channelbag(slot).fcurves in the new slot system).

    # Push as NLA strip so multiple actions coexist in the exported GLB
    track = sliding.animation_data.nla_tracks.new()
    track.name = name
    strip = track.strips.new(name=name, start=1, action=action)
    strip.name = name
    sliding.animation_data.action = None

def build_animations(sliding):
    # idle: slow breath around x=8.0
    make_clip(sliding, "idle", [(1, 8.0), (30, 8.25), (60, 7.75), (90, 8.0)])
    # seeking: anticipation -> overshoot -> settle to x=4.0
    make_clip(sliding, "seeking", [(1, 8.0), (8, 8.6), (22, 3.5), (30, 4.0)])
    # measuring: close from x=8.0 to x=2.8 (28mm-equivalent reading)
    make_clip(sliding, "measuring", [(1, 8.0), (45, 2.8), (60, 2.8)])
    # disengaged: open to x=14.0
    make_clip(sliding, "disengaged", [(1, 8.0), (30, 14.0)])

# ----------------------------------------------------------------------------
# 7. Camera
# ----------------------------------------------------------------------------

def build_camera():
    # We export with a camera so Three.js OrbitControls has a reference;
    # at runtime Three.js usually overrides with its own PerspectiveCamera.
    bpy.ops.object.camera_add(location=(9.0, -16.0, 4.0))
    cam = bpy.context.active_object
    cam.name = "Camera"
    cam.rotation_euler = (math.radians(78), 0, math.radians(0))
    cam.data.lens = 70

# ----------------------------------------------------------------------------
# 8. Export
# ----------------------------------------------------------------------------

def export_glb(out_path):
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.export_scene.gltf(
        filepath=out_path,
        export_format="GLB",
        export_draco_mesh_compression_enable=True,
        export_draco_mesh_compression_level=6,
        export_animations=True,
        export_nla_strips=True,
        export_apply=True,
        export_yup=True,
        export_lights=True,
        export_cameras=True,
    )
    return out_path

# ----------------------------------------------------------------------------
# 9. Main
# ----------------------------------------------------------------------------

def main():
    print("[caliper] reset scene")
    reset_scene()
    print("[caliper] build materials")
    mats = build_materials()
    print("[caliper] build geometry")
    root, sliding = build_caliper(mats)
    print("[caliper] build lighting")
    build_lighting()
    print("[caliper] build camera")
    build_camera()
    print("[caliper] build animations")
    build_animations(sliding)
    print(f"[caliper] export to {OUT_PATH}")
    export_glb(OUT_PATH)
    size_kb = os.path.getsize(OUT_PATH) / 1024.0
    print(f"[caliper] exported {size_kb:.1f} KB (budget <= 80 KB)")
    if size_kb > 80:
        print(f"[caliper] WARNING: GLB exceeded 80 KB budget", file=sys.stderr)

if __name__ == "__main__":
    main()

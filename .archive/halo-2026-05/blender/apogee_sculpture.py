"""
apogee_sculpture.py
───────────────────
Generates the hero sculpture for the Apogee site as a compressed .glb.

The mesh is a high-resolution torus knot with a procedural displacement
overlay, smooth-shaded, scaled so its bounding sphere is ~1 unit. It is
exported as a Draco-compressed .glb suitable for dropping into the
Three.js scene as a replacement for the procedural TorusKnotGeometry.

USAGE
─────
A. From inside Blender (GUI):
   File → open this script in the Text Editor → "Run Script".

B. Headless (recommended for the pipeline):
   blender -b -P apogee_sculpture.py

C. From a Blender MCP session (Anthropic Blender MCP, April 2026):
   Ask Claude to "run apogee_sculpture.py via the Blender MCP".
   The script is idempotent — re-running clears the previous output.

OUTPUT
──────
   ./apogee_sculpture.glb              (Draco-compressed, ~150–400 KB)
   ./apogee_sculpture.blend            (working file, optional)

The output .glb is loaded by index.html / apogee.html when present at
/public/models/apogee_sculpture.glb. To switch the hero from the
procedural torus knot to the baked sculpture, swap the geometry block
in the Three.js setup with:

    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    new GLTFLoader().load('/models/apogee_sculpture.glb', (gltf) => {
      sculpture = gltf.scene.children[0];
      sculpture.material = mat;       // re-use the dispersion-glass material
      scene.add(sculpture);
    });
"""

import os
import sys
import math
import bpy
import bmesh
from mathutils import Vector

OUT_DIR  = os.path.dirname(os.path.abspath(__file__))
GLB_PATH         = os.path.join(OUT_DIR, "apogee_sculpture.glb")
WORK_GLB_PATH    = os.path.join(OUT_DIR, "apogee_work.glb")
STUDIO_GLB_PATH  = os.path.join(OUT_DIR, "apogee_studio.glb")
JOURNAL_GLB_PATH = os.path.join(OUT_DIR, "apogee_journal.glb")
LOST_GLB_PATH    = os.path.join(OUT_DIR, "apogee_lost.glb")
BLEND_PATH       = os.path.join(OUT_DIR, "apogee_sculpture.blend")

# ─── 1. Wipe scene ───────────────────────────────────────────────────────────
def wipe_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.textures, bpy.data.images):
        for item in list(block):
            try: block.remove(item)
            except RuntimeError: pass

# ─── 2. Build a torus knot via bmesh ─────────────────────────────────────────
def build_torus_knot(p=2, q=5, radius=0.95, tube=0.30, segments_major=320, segments_minor=40):
    """Parametric torus knot, mirroring the Three.js TorusKnotGeometry."""
    bm = bmesh.new()
    verts = []
    # ring of points around the spine for each major segment
    ring_count = segments_major
    tube_segs = segments_minor

    # First pass: collect spine + Frenet frame for sweep
    spine = []
    tangents = []
    for i in range(ring_count):
        u = (i / ring_count) * math.pi * 2.0
        cu = math.cos(u); su = math.sin(u)
        cqu = math.cos(q * u); cpu = math.cos(p * u)
        r = radius * (2.0 + cqu) * 0.5
        x = r * cpu
        y = r * math.sin(p * u)
        z = r * 0.5 * math.sin(q * u)
        spine.append(Vector((x, y, z)))

    # finite-difference tangents
    for i in range(ring_count):
        nxt = spine[(i + 1) % ring_count]
        prv = spine[(i - 1) % ring_count]
        t = (nxt - prv).normalized()
        tangents.append(t)

    # parallel transport reference frame
    normals = []
    binormals = []
    n = Vector((0, 0, 1)).cross(tangents[0])
    if n.length < 1e-6: n = Vector((1, 0, 0))
    n.normalize()
    for i in range(ring_count):
        t = tangents[i]
        b = t.cross(n).normalized()
        n = b.cross(t).normalized()
        normals.append(n.copy())
        binormals.append(b.copy())

    # Sweep tube
    rings = []
    for i in range(ring_count):
        c = spine[i]
        n_i = normals[i]
        b_i = binormals[i]
        ring = []
        for j in range(tube_segs):
            v = (j / tube_segs) * math.pi * 2.0
            offset = (math.cos(v) * tube) * n_i + (math.sin(v) * tube) * b_i
            ring.append(bm.verts.new(c + offset))
        rings.append(ring)
    bm.verts.ensure_lookup_table()

    for i in range(ring_count):
        r0 = rings[i]
        r1 = rings[(i + 1) % ring_count]
        for j in range(tube_segs):
            j2 = (j + 1) % tube_segs
            bm.faces.new([r0[j], r0[j2], r1[j2], r1[j]])

    mesh = bpy.data.meshes.new("ApogeeSculpture")
    bm.normal_update()
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new("ApogeeSculpture", mesh)
    bpy.context.collection.objects.link(obj)
    return obj

# ─── 3. Add procedural displacement + smooth shading ─────────────────────────
def add_displacement(obj, strength=0.04, noise_scale=2.3, noise_depth=3):
    # subdivide a touch for displacement headroom
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.modifier_add(type="SUBSURF")
    sub = obj.modifiers[-1]
    sub.levels = 1
    sub.render_levels = 2

    # Blender 5.x dropped several MusgraveTexture attributes (noise_depth,
    # dimension_max, lacunarity, musgrave_type). Guard each assignment so
    # the script runs across 3.x → 5.x without bombing out; missing params
    # silently use Blender's current defaults.
    try:
        tex = bpy.data.textures.new("ApogeeNoise", type="MUSGRAVE")
    except TypeError:
        # Last-ditch fallback for builds where MUSGRAVE was renamed/removed
        tex = bpy.data.textures.new("ApogeeNoise", type="CLOUDS")
    for attr, value in (
        ("musgrave_type",  "RIDGED_MULTIFRACTAL"),
        ("noise_scale",    noise_scale),
        ("noise_depth",    noise_depth),
        ("dimension_max",  1.0),
        ("lacunarity",     2.05),
    ):
        if hasattr(tex, attr):
            try: setattr(tex, attr, value)
            except (TypeError, AttributeError): pass

    bpy.ops.object.modifier_add(type="DISPLACE")
    dsp = obj.modifiers[-1]
    dsp.texture = tex
    dsp.strength = strength
    dsp.mid_level = 0.5
    dsp.direction = "NORMAL"

    # smooth shading
    bpy.ops.object.shade_smooth()
    if hasattr(obj.data, "use_auto_smooth"):
        obj.data.use_auto_smooth = True
        obj.data.auto_smooth_angle = math.radians(60.0)

# ─── 4. Apply a placeholder PBR material (the Three.js scene overrides) ──────
def assign_placeholder_material(obj):
    mat = bpy.data.materials.new("ApogeeGlass")
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs["Base Color"].default_value = (1.0, 1.0, 1.0, 1.0)
        bsdf.inputs["Roughness"].default_value = 0.05
        # Transmission input name changed across Blender versions — try both
        for key in ("Transmission", "Transmission Weight"):
            if key in bsdf.inputs:
                bsdf.inputs[key].default_value = 1.0
                break
        if "IOR" in bsdf.inputs: bsdf.inputs["IOR"].default_value = 1.45
    if obj.data.materials: obj.data.materials[0] = mat
    else: obj.data.materials.append(mat)

# ─── 5. Center & scale ───────────────────────────────────────────────────────
def normalize_scale(obj, target_radius=1.0):
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.origin_set(type="ORIGIN_GEOMETRY", center="BOUNDS")
    # rough bounding sphere radius
    coords = [obj.matrix_world @ Vector(c) for c in obj.bound_box]
    cx = sum(v.x for v in coords) / 8
    cy = sum(v.y for v in coords) / 8
    cz = sum(v.z for v in coords) / 8
    center = Vector((cx, cy, cz))
    r = max((v - center).length for v in coords)
    if r > 0:
        s = target_radius / r
        obj.scale = (s, s, s)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.location = (0, 0, 0)

# ─── 6a. Build the halo ring — a thin tilted torus authored alongside the
#        sculpture so Blender drives both forms in one pass. Slight noise
#        keeps it from reading as a perfect primitive. ──────────────────────
def build_halo_ring(radius=1.55, tube=0.014, major_segments=256, minor_segments=12, tilt_x=0.42, tilt_z=-0.18):
    bm = bmesh.new()
    rings = []
    for i in range(major_segments):
        u = (i / major_segments) * math.pi * 2.0
        cu = math.cos(u); su = math.sin(u)
        # spine point on a flat circle in XZ plane
        sx = math.cos(u) * radius
        sy = 0.0
        sz = math.sin(u) * radius
        # spine tangent
        tx = -math.sin(u); ty = 0.0; tz = math.cos(u)
        tangent = Vector((tx, ty, tz)).normalized()
        # normal points up (out of the disk plane)
        n = Vector((0, 1, 0))
        b = tangent.cross(n).normalized()
        ring = []
        for j in range(minor_segments):
            v = (j / minor_segments) * math.pi * 2.0
            offset = (math.cos(v) * tube) * n + (math.sin(v) * tube) * b
            ring.append(bm.verts.new(Vector((sx, sy, sz)) + offset))
        rings.append(ring)
    bm.verts.ensure_lookup_table()
    for i in range(major_segments):
        r0 = rings[i]
        r1 = rings[(i + 1) % major_segments]
        for j in range(minor_segments):
            j2 = (j + 1) % minor_segments
            bm.faces.new([r0[j], r0[j2], r1[j2], r1[j]])
    mesh = bpy.data.meshes.new("ApogeeRing")
    bm.normal_update()
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new("ApogeeRing", mesh)
    obj.rotation_euler = (tilt_x, 0.0, tilt_z)
    bpy.context.collection.objects.link(obj)
    # smooth shading
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.shade_smooth()
    obj.select_set(False)
    return obj

# ─── 6b. Export both objects (sculpture + ring) in one Draco-compressed .glb.
#        Three.js looks for them by mesh name. ────────────────────────────────
def export_glb(path):
    # Select all our authored objects (everything named Apogee*)
    bpy.ops.object.select_all(action="DESELECT")
    targets = []
    for name in ("ApogeeSculpture", "ApogeeRing"):
        o = bpy.data.objects.get(name)
        if o:
            o.select_set(True)
            targets.append(o)
    if targets:
        bpy.context.view_layer.objects.active = targets[0]

    kwargs = dict(
        filepath=path,
        export_format="GLB",
        use_selection=True,
        export_apply=True,           # bake modifiers
        export_yup=True,
        export_draco_mesh_compression_enable=True,
        export_draco_mesh_compression_level=6,
        export_draco_position_quantization=14,
        export_draco_normal_quantization=10,
        export_draco_texcoord_quantization=12,
    )
    # Older Blender versions don't support some Draco kwargs — fall back gracefully
    try:
        bpy.ops.export_scene.gltf(**kwargs)
    except TypeError:
        fallback = {k: v for k, v in kwargs.items() if not k.startswith("export_draco_")}
        fallback["export_draco_mesh_compression_enable"] = True
        bpy.ops.export_scene.gltf(**fallback)
    print(f"[apogee] glb written → {path} (sculpture + ring)")

# ─── 6c. Variant builders — each page identity gets its own sculptural form
#         so the brand reads as a *family* of shapes, not the same knot.
#         Each variant is named distinctively so we can find it in Three.js. ─

def build_work_knot():
    """Work page — an elaborate p=3, q=7 knot with stronger displacement.
    More energetic than the home sculpture, reads as 'the engagement'.
    """
    obj = build_torus_knot(p=3, q=7, segments_major=320, segments_minor=44, radius=0.95, tube=0.26)
    add_displacement(obj, strength=0.055, noise_scale=2.0)
    normalize_scale(obj)
    obj.name = "ApogeeWork"
    obj.data.name = "ApogeeWork"
    return obj

def build_studio_orb():
    """Studio page — a calm icosphere with subtle organic displacement.
    Reads as 'the practice' — stillness, the operating thesis at rest.
    """
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=4, radius=1.0, location=(0,0,0))
    obj = bpy.context.active_object
    obj.name = "ApogeeStudio"
    obj.data.name = "ApogeeStudio"
    # Subdivision for smoother surface
    mod_subsurf = obj.modifiers.new("Subsurf", 'SUBSURF')
    mod_subsurf.levels = 2
    mod_subsurf.render_levels = 2
    # Subtle organic displacement
    try:
        tex = bpy.data.textures.new("StudioNoise", type="MUSGRAVE")
    except TypeError:
        tex = bpy.data.textures.new("StudioNoise", type="CLOUDS")
    for attr, value in (
        ("musgrave_type", "FBM"),
        ("noise_scale",   0.55),
        ("noise_depth",   2),
        ("dimension_max", 1.0),
    ):
        if hasattr(tex, attr):
            try: setattr(tex, attr, value)
            except (TypeError, AttributeError): pass
    mod_disp = obj.modifiers.new("Disp", 'DISPLACE')
    mod_disp.texture = tex
    mod_disp.strength = 0.05
    mod_disp.mid_level = 0.5
    # smooth shade
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.shade_smooth()
    if hasattr(obj.data, "use_auto_smooth"):
        try: obj.data.use_auto_smooth = True
        except (AttributeError, TypeError): pass
    if hasattr(obj.data, "auto_smooth_angle"):
        try: obj.data.auto_smooth_angle = math.radians(60)
        except (AttributeError, TypeError): pass
    assign_placeholder_material(obj)
    normalize_scale(obj)
    return obj

def build_lost_form(radius=1.45, tube=0.045, major_segments=256, minor_segments=12, gaps=((22, 42), (138, 162))):
    """404 page — the halo with sectors missing.
    Reads as 'the brand glyph interrupted' — the page is incomplete.
    Procedural: a torus minus a couple of sectors, smooth-shaded.
    """
    bm = bmesh.new()
    rings = []
    for i in range(major_segments):
        in_gap = any(start <= i < end for start, end in gaps)
        if in_gap:
            rings.append(None)
            continue
        u = (i / major_segments) * math.pi * 2.0
        sx = math.cos(u) * radius
        sy = 0.0
        sz = math.sin(u) * radius
        tangent = Vector((-math.sin(u), 0.0, math.cos(u))).normalized()
        normal = Vector((0.0, 1.0, 0.0))
        binormal = tangent.cross(normal).normalized()
        ring = []
        for j in range(minor_segments):
            v = (j / minor_segments) * math.pi * 2.0
            offset = (math.cos(v) * tube) * normal + (math.sin(v) * tube) * binormal
            ring.append(bm.verts.new(Vector((sx, sy, sz)) + offset))
        rings.append(ring)
    bm.verts.ensure_lookup_table()
    for i in range(major_segments):
        r0 = rings[i]
        r1 = rings[(i + 1) % major_segments]
        if r0 is None or r1 is None:
            continue
        for j in range(minor_segments):
            j2 = (j + 1) % minor_segments
            bm.faces.new([r0[j], r0[j2], r1[j2], r1[j]])
    mesh = bpy.data.meshes.new("ApogeeLost")
    bm.normal_update()
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new("ApogeeLost", mesh)
    obj.rotation_euler = (0.42, 0.0, -0.18)
    bpy.context.collection.objects.link(obj)
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.shade_smooth()
    assign_placeholder_material(obj)
    normalize_scale(obj)
    return obj

def build_journal_strip(length=2.6, width=0.45, segments=220, thickness=0.018, twists=1.4, wave_amp=0.12):
    """Journal page — a twisted ribbon, like a folded page edge on rotation.
    Reads as 'the writing' — editorial, linear, with a slow Mobius-style twist.
    """
    bm = bmesh.new()
    rings = []
    for i in range(segments):
        u = i / (segments - 1)
        x = (u - 0.5) * length
        y = math.sin(u * math.pi * 1.6) * wave_amp
        z = math.cos(u * math.pi * 1.2) * wave_amp * 0.35
        twist = u * math.pi * twists
        ct = math.cos(twist); st = math.sin(twist)
        # Cross-section: a small rectangle (width × thickness) rotated by twist
        cross = [
            (-width * 0.5, -thickness * 0.5),
            ( width * 0.5, -thickness * 0.5),
            ( width * 0.5,  thickness * 0.5),
            (-width * 0.5,  thickness * 0.5),
        ]
        ring = []
        for (cu, ct2) in cross:
            ny = cu * ct - ct2 * st
            nz = cu * st + ct2 * ct
            ring.append(bm.verts.new((x, y + ny, z + nz)))
        rings.append(ring)
    bm.verts.ensure_lookup_table()
    for i in range(segments - 1):
        r0 = rings[i]; r1 = rings[i + 1]
        for j in range(4):
            j2 = (j + 1) % 4
            bm.faces.new([r0[j], r0[j2], r1[j2], r1[j]])
    mesh = bpy.data.meshes.new("ApogeeJournal")
    bm.normal_update()
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new("ApogeeJournal", mesh)
    bpy.context.collection.objects.link(obj)
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.shade_smooth()
    assign_placeholder_material(obj)
    normalize_scale(obj)
    return obj

def export_named_glb(path, obj_names):
    """Export a list of named objects to a single Draco-compressed GLB."""
    bpy.ops.object.select_all(action="DESELECT")
    targets = []
    for name in obj_names:
        o = bpy.data.objects.get(name)
        if o:
            o.select_set(True)
            targets.append(o)
    if targets:
        bpy.context.view_layer.objects.active = targets[0]
    kwargs = dict(
        filepath=path,
        export_format="GLB",
        use_selection=True,
        export_apply=True,
        export_yup=True,
        export_draco_mesh_compression_enable=True,
        export_draco_mesh_compression_level=6,
        export_draco_position_quantization=14,
        export_draco_normal_quantization=10,
        export_draco_texcoord_quantization=12,
    )
    try:
        bpy.ops.export_scene.gltf(**kwargs)
    except TypeError:
        fallback = {k: v for k, v in kwargs.items() if not k.startswith("export_draco_")}
        fallback["export_draco_mesh_compression_enable"] = True
        bpy.ops.export_scene.gltf(**fallback)
    print(f"[apogee] glb written → {path} ({', '.join(obj_names)})")

# ─── 7. Orchestrate ──────────────────────────────────────────────────────────
def main():
    print("[apogee] building sculpture family …")

    # ── Variant A: Home — sculpture + halo ring (the flagship) ──
    wipe_scene()
    obj = build_torus_knot()
    add_displacement(obj)
    assign_placeholder_material(obj)
    normalize_scale(obj)
    build_halo_ring()
    try:
        bpy.ops.wm.save_as_mainfile(filepath=BLEND_PATH)
    except Exception as e:
        print(f"[apogee] could not save .blend: {e}")
    export_glb(GLB_PATH)  # writes ApogeeSculpture + ApogeeRing

    # ── Variant B: Work — elaborate p=3,q=7 knot, stronger displacement ──
    wipe_scene()
    build_work_knot()
    export_named_glb(WORK_GLB_PATH, ["ApogeeWork"])

    # ── Variant C: Studio — calm icosphere with subtle Musgrave displacement ──
    wipe_scene()
    build_studio_orb()
    export_named_glb(STUDIO_GLB_PATH, ["ApogeeStudio"])

    # ── Variant D: Journal — twisted ribbon (Mobius-like editorial form) ──
    wipe_scene()
    build_journal_strip()
    export_named_glb(JOURNAL_GLB_PATH, ["ApogeeJournal"])

    # ── Variant E: 404 — broken halo with sectors missing ──
    wipe_scene()
    build_lost_form()
    export_named_glb(LOST_GLB_PATH, ["ApogeeLost"])

    print("[apogee] done. Five variants written.")
    if bpy.app.background:
        bpy.ops.wm.quit_blender()

if __name__ == "__main__":
    main()

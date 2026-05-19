"""
fitsole_cairo.py
────────────────
Bakes a stylized 3D Cairo storefront silhouette as a Draco-compressed .glb.

Concept: a low-poly, thin-depth extrusion of the Cairo skyline that already
lives in public/brand/pattern-cairo.svg — minaret + dome + palms + low-rise
blocks + one modern tower. Used as the visual at the head of the Branches
section so the user lands in Cairo before they see the map.

Rejects: plastic 3D pin on cartoon globe, spinning sneaker, floating product.
Aligns with: the rebrand's brave decision (the shop is in Cairo, and the
city is part of the trust spine) per docs/art-direction.md.

USAGE
─────
Headless (recommended):
   "E:\\blender.exe" -b -P blender/fitsole_cairo.py

The script is idempotent — re-running clears the previous scene.

OUTPUT
──────
   workspace/fitsole-rebrand/public/3d/fitsole-cairo.glb  (~80-200 KB)

DESIGN
──────
- Materials: warm terracotta primary + dark ink secondary + emissive bulb dots.
- All meshes share a single multi-material set so the GLB stays one scene root.
- Smooth shading on curved forms (dome, bulbs); flat on rectilinear forms.
- World scale: 50 units wide × 12 units tall × 0.6 units deep. Caller in Three.js
  rescales to fit container.
"""

import os
import sys
import math
import bpy

OUT_DIR = os.path.normpath(
    os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "..",
        "workspace",
        "fitsole-rebrand",
        "public",
        "3d",
    )
)
GLB_PATH = os.path.join(OUT_DIR, "fitsole-cairo.glb")
os.makedirs(OUT_DIR, exist_ok=True)


# ---------------------------------------------------------------- helpers ---

def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for c in (bpy.data.meshes, bpy.data.materials, bpy.data.cameras, bpy.data.lights, bpy.data.curves):
        for item in list(c):
            try:
                c.remove(item)
            except RuntimeError:
                pass


def make_material(name, base_color=(0.55, 0.18, 0.10, 1.0), roughness=0.6, metallic=0.0, emission=None, emission_strength=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.inputs["Base Color"].default_value = base_color
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if emission is not None and "Emission Color" in bsdf.inputs:
        bsdf.inputs["Emission Color"].default_value = emission
        bsdf.inputs["Emission Strength"].default_value = emission_strength
    elif emission is not None and "Emission" in bsdf.inputs:
        bsdf.inputs["Emission"].default_value = emission
    nt.links.new(bsdf.outputs[0], out.inputs[0])
    return mat


def add_block(x, y, z, w, h, d, name, material):
    """Axis-aligned box centered on its base midline (x, z=0)."""
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(x, y, z + h / 2.0))
    obj = bpy.context.active_object
    obj.scale = (w / 2.0, d / 2.0, h / 2.0)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.name = name
    if obj.data.materials:
        obj.data.materials[0] = material
    else:
        obj.data.materials.append(material)
    return obj


def add_cylinder(x, y, z, radius, height, name, material, vertices=24):
    bpy.ops.mesh.primitive_cylinder_add(
        radius=radius, depth=height, location=(x, y, z + height / 2.0), vertices=vertices
    )
    obj = bpy.context.active_object
    obj.name = name
    if obj.data.materials:
        obj.data.materials[0] = material
    else:
        obj.data.materials.append(material)
    bpy.ops.object.shade_smooth()
    return obj


def add_cone(x, y, z, radius1, radius2, height, name, material):
    bpy.ops.mesh.primitive_cone_add(
        radius1=radius1, radius2=radius2, depth=height, location=(x, y, z + height / 2.0), vertices=24
    )
    obj = bpy.context.active_object
    obj.name = name
    if obj.data.materials:
        obj.data.materials[0] = material
    else:
        obj.data.materials.append(material)
    bpy.ops.object.shade_smooth()
    return obj


def add_uv_sphere(x, y, z, radius, name, material):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=radius, location=(x, y, z), segments=24, ring_count=14)
    obj = bpy.context.active_object
    obj.name = name
    if obj.data.materials:
        obj.data.materials[0] = material
    else:
        obj.data.materials.append(material)
    bpy.ops.object.shade_smooth()
    return obj


def add_dome(x, y, z, radius, name, material):
    """Half-sphere dome."""
    sphere = add_uv_sphere(x, y, z, radius, name, material)
    # Bisect the sphere at z (keep top half)
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.mesh.bisect(
        plane_co=(0, 0, z), plane_no=(0, 0, 1),
        clear_inner=True, clear_outer=False, use_fill=True
    )
    bpy.ops.object.mode_set(mode="OBJECT")
    return sphere


# ---------------------------------------------------- build the storefront ---

def build_scene():
    # Palette (linear sRGB approximations of the OKLCH tokens from globals.css)
    ink = make_material("ink", base_color=(0.07, 0.06, 0.06, 1.0), roughness=0.55)
    terracotta = make_material("terracotta", base_color=(0.55, 0.17, 0.09, 1.0), roughness=0.45)
    warm = make_material("warm", base_color=(0.65, 0.36, 0.18, 1.0), roughness=0.5)
    paper = make_material("paper", base_color=(0.92, 0.88, 0.80, 1.0), roughness=0.7)
    bulb = make_material(
        "bulb",
        base_color=(0.98, 0.78, 0.42, 1.0),
        roughness=0.18,
        emission=(0.98, 0.62, 0.32, 1.0),
        emission_strength=4.0,
    )

    # World ground plate — thin paper-tone slab as the floor of the scene.
    add_block(25.0, 0.0, -0.1, 52.0, 0.6, 0.1, "ground", paper)

    # ----- Block 1: low-rise A (3 windows) -------------------------------
    add_block(4.5, 0.0, 0.0, 7.0, 0.5, 4.0, "blockA", ink)
    for i, wx in enumerate([2.5, 4.5, 6.5]):
        add_block(wx, 0.27, 1.4, 0.6, 0.05, 0.6, f"blockA_win_{i}", terracotta)

    # ----- Minaret + adjacent mosque ------------------------------------
    add_cylinder(11.0, 0.0, 0.0, 0.7, 7.5, "minaret_shaft", ink)
    add_cone(11.0, 0.0, 7.5, 0.85, 0.0, 1.8, "minaret_top", ink)
    add_uv_sphere(11.0, 0.0, 7.6, 0.22, "minaret_finial", terracotta)
    add_block(13.0, 0.0, 0.0, 3.4, 0.5, 3.5, "mosque_base", warm)
    add_dome(14.7, 0.0, 3.5, 1.5, "mosque_dome", warm)

    # ----- Palm tree A ---------------------------------------------------
    add_cylinder(17.3, 0.0, 0.0, 0.22, 3.6, "palmA_trunk", ink, vertices=12)
    # 4 fronds — bent planes (simulated by stretched cubes)
    for ang in (35, 145, 225, 315):
        rad = math.radians(ang)
        fx = 17.3 + math.cos(rad) * 0.8
        fz = 3.6 + 0.0
        bpy.ops.mesh.primitive_cube_add(size=1.0, location=(fx, 0.0, fz + 0.05))
        f = bpy.context.active_object
        f.scale = (0.95, 0.05, 0.10)
        f.rotation_euler = (0, 0, rad)
        bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
        f.name = f"palmA_frond_{ang}"
        if f.data.materials:
            f.data.materials[0] = ink
        else:
            f.data.materials.append(ink)

    # ----- Block 2: low-rise B (longer, no windows) ----------------------
    add_block(22.5, 0.0, 0.0, 8.0, 0.5, 3.0, "blockB", ink)
    # Edison bulb hung from its facade
    add_uv_sphere(22.5, 0.4, 2.6, 0.18, "blockB_bulb", bulb)
    add_cylinder(22.5, 0.35, 2.78, 0.03, 0.34, "blockB_wire", ink, vertices=8)

    # ----- Block 3: low-rise C with door + warm interior ---------------
    add_block(28.5, 0.0, 0.0, 5.0, 0.5, 3.5, "blockC", ink)
    # Doorway recess (subtractive look done as a warm-lit rectangle in front)
    add_block(28.0, 0.35, 0.0, 1.4, 0.05, 2.4, "blockC_door", warm)
    add_uv_sphere(28.0, 0.4, 2.5, 0.13, "blockC_doorbulb", bulb)

    # ----- Palm tree B (smaller) ----------------------------------------
    add_cylinder(31.5, 0.0, 0.0, 0.18, 2.6, "palmB_trunk", ink, vertices=12)
    for ang in (40, 140, 220, 320):
        rad = math.radians(ang)
        fx = 31.5 + math.cos(rad) * 0.6
        fz = 2.6
        bpy.ops.mesh.primitive_cube_add(size=1.0, location=(fx, 0.0, fz + 0.05))
        f = bpy.context.active_object
        f.scale = (0.75, 0.05, 0.09)
        f.rotation_euler = (0, 0, rad)
        bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
        f.name = f"palmB_frond_{ang}"
        if f.data.materials:
            f.data.materials[0] = ink
        else:
            f.data.materials.append(ink)

    # ----- Modern tower (the signature outlier) ------------------------
    add_block(36.0, 0.0, 0.0, 3.0, 0.5, 10.0, "tower", warm)
    # Window grid pattern — small terracotta accent rectangles
    for row in range(8):
        for col in (0, 1, 2):
            wx = 35.0 + col * 1.0
            wz = 0.8 + row * 1.1
            if (row + col) % 3 == 0:
                continue  # leave some windows off for visual interest
            add_block(wx, 0.27, wz, 0.45, 0.05, 0.5, f"tower_win_{row}_{col}", terracotta)

    # ----- End-cap block D --------------------------------------------
    add_block(42.0, 0.0, 0.0, 5.0, 0.5, 4.5, "blockD", ink)
    add_uv_sphere(43.5, 0.4, 3.8, 0.15, "blockD_bulb", bulb)
    add_uv_sphere(40.8, 0.4, 3.5, 0.13, "blockD_bulb2", bulb)

    # ----- Horizon ground line (terracotta strip) ---------------------
    add_block(25.0, 0.0, -0.04, 52.0, 0.61, 0.05, "horizon", terracotta)


# ----------------------------------------------------------------- export ---

def normalize_and_join():
    """Join all visible meshes into one root for clean GLB export."""
    bpy.ops.object.select_all(action="DESELECT")
    meshes = [o for o in bpy.context.scene.objects if o.type == "MESH"]
    if not meshes:
        return
    for m in meshes:
        m.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    # Recalculate normals for smooth shading consistency.
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.mesh.normals_make_consistent(inside=False)
    bpy.ops.object.mode_set(mode="OBJECT")
    # Center the scene at the origin in X so Three.js can rotate it freely.
    bpy.ops.object.origin_set(type="ORIGIN_CENTER_OF_VOLUME", center="MEDIAN")


def export_glb():
    bpy.ops.object.select_all(action="SELECT")
    print(f"[fitsole_cairo] exporting → {GLB_PATH}")
    bpy.ops.export_scene.gltf(
        filepath=GLB_PATH,
        export_format="GLB",
        use_selection=True,
        export_apply=True,
        export_yup=True,
        export_draco_mesh_compression_enable=True,
        export_draco_mesh_compression_level=6,
    )
    if os.path.exists(GLB_PATH):
        kb = os.path.getsize(GLB_PATH) / 1024
        print(f"[fitsole_cairo] success: {kb:.1f} KB")
    else:
        print("[fitsole_cairo] ERROR: GLB not created", file=sys.stderr)
        sys.exit(1)


def main():
    clear_scene()
    build_scene()
    normalize_and_join()
    export_glb()


if __name__ == "__main__":
    main()

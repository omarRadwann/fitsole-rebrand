'use client'

import { useEffect, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import * as THREE from 'three'

/*
 * CairoSkyline3D — loads the Blender-baked fitsole-cairo.glb (62.7 KB Draco-
 * compressed) and renders it as a slow-rotating silhouette in the Branches
 * section header. Y-rotation is scroll-tied via the section's IO progress so
 * the skyline depth is revealed as the user enters Cairo.
 *
 * Performance:
 *  - Single GLB, ~5K verts, Draco-decoded on the GPU.
 *  - One PointLight + one AmbientLight. No postprocessing.
 *  - dpr [1, 1.5] inherited from the parent <Canvas>.
 *  - Reuses the three.js + R3F + drei chunk already in the bundle (Cairo
 *    Evening shader), so this adds ~0 KB to First-Load JS.
 *
 * Reduced-motion + mobile fallback handled by the parent CairoSkyline3DContainer.
 */
export function CairoSkyline3D({ progress }: { progress: number }) {
  const gltf = useLoader(GLTFLoader, '/3d/fitsole-cairo.glb', (loader) => {
    const draco = new DRACOLoader()
    draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    ;(loader as GLTFLoader).setDRACOLoader(draco)
  })

  const rootRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!rootRef.current) return
    // Base slow rotation + scroll-tied bias. Progress 0..1 maps to -18° to +18°.
    const base = state.clock.getElapsedTime() * 0.05
    const scrollBias = (progress - 0.5) * 0.6
    rootRef.current.rotation.y = base + scrollBias
  })

  return (
    <group ref={rootRef} position={[0, -2.0, 0]} scale={0.22}>
      <primitive object={gltf.scene} />
    </group>
  )
}

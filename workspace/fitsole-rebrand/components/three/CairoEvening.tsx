'use client'

import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { cairoEveningFrag, cairoEveningVert } from '@/shaders/cairoEvening.frag'

type Props = {
  /** Scroll progress (0..1). Bridged from Hero's --p via the parent. */
  progress: number
}

/*
 * Fullscreen quad rendering the Cairo Evening shader.
 *
 * Implementation note: we use a plain TriangleGeometry across NDC (-1..1)
 * via a passthrough vert shader so no camera projection is required.
 * Result: 2 verts on screen, ~zero geometry cost; the fragment shader
 * does the entire image.
 */
export function CairoEvening({ progress }: Props) {
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const { size } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    // Initialize once. The uResolution is then updated every frame via useFrame
    // — putting size.* in the deps would recreate uniforms and remount the
    // shader on every resize, which is exactly what we don't want.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  useFrame((state) => {
    if (!matRef.current) return
    matRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    matRef.current.uniforms.uProgress.value = progress
    matRef.current.uniforms.uResolution.value.set(state.size.width, state.size.height)
  })

  return (
    <mesh frustumCulled={false}>
      {/* Fullscreen triangle pattern: a single triangle that covers the viewport.
          Cheaper than a 2-triangle plane (one vertex shader invocation less). */}
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3]}
        />
        <bufferAttribute
          attach="attributes-uv"
          args={[new Float32Array([0, 0, 2, 0, 0, 2]), 2]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={cairoEveningVert}
        fragmentShader={cairoEveningFrag}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}

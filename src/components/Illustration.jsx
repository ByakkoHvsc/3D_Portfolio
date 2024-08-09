import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Illustration-transformed.glb')

  return (
    <group {...props} dispose={null} rotation={[0, -Math.PI/2, 0]}> {/* Rotate 180 degrees around the Y-axis */}
      <mesh geometry={nodes.Object_4.geometry} material={materials.outline_non_culled} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.white} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.outline_culled} position={[7.278, 2.518, -5.455]} scale={0.641} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.big_shapes} position={[0, 0.866, 0]} scale={[1, 0.924, 1]} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.floor_n_mattress} position={[2.293, 0.149, 0.584]} scale={0.819} />
      <mesh geometry={nodes.Object_53.geometry} material={materials.notes} position={[-0.84, 3.076, -1.424]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 0.792]} />
      <mesh geometry={nodes.Object_104.geometry} material={materials.details} position={[-0.624, 2.744, 1.596]} />
      <mesh geometry={nodes.Object_262.geometry} material={materials.notes} position={[-0.76, 3.264, -0.931]} rotation={[-0.233, 0.481, -0.891]} />
      <mesh geometry={nodes.Object_434.geometry} material={materials.outline_culled} position={[-0.76, 3.264, -0.931]} rotation={[-0.233, 0.481, -0.891]} />
      <mesh geometry={nodes.Object_436.geometry} material={materials.leaves} position={[0.258, 1.018, -2.708]} rotation={[0.071, -0.04, -1.089]} />
      <mesh geometry={nodes.Object_557.geometry} material={materials.Material} position={[0.704, 2.379, -0.396]} rotation={[0, -0.025, 0]} />
      <mesh geometry={nodes.Object_566.geometry} material={materials.catsu} position={[2.025, 0.504, 0.487]} rotation={[-0.114, 0.003, -0.035]} />
      <instancedMesh args={[nodes.Object_319.geometry, materials.leaves, 5]} instanceMatrix={nodes.Object_319.instanceMatrix} />
      <instancedMesh args={[nodes.Object_320.geometry, materials.outline_non_culled, 5]} instanceMatrix={nodes.Object_320.instanceMatrix} />
      <instancedMesh args={[nodes.Object_335.geometry, materials.leaves, 6]} instanceMatrix={nodes.Object_335.instanceMatrix} />
      <instancedMesh args={[nodes.Object_336.geometry, materials.outline_non_culled, 6]} instanceMatrix={nodes.Object_336.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/Illustration-transformed.glb')

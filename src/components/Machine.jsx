/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 machine.gltf --transform 
Files: machine.gltf [247.23KB] > /Users/harshvardhansinghchauhan/Downloads/blender/espresso_machineproduct/machine-transformed.glb [150.22KB] (39%)
Author: Mrhigh (https://sketchfab.com/Mrhigh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/espresso-machineproduct-8ed2c7f1517042b59de574fd74deecf0
Title: espresso machine(product)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/machine-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.x003_carbon_fiber_0.geometry} material={materials.PaletteMaterial001} position={[0, 0.164, -0.063]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.102, 0.142, 0.162]} />
      <mesh geometry={nodes.x002_steel_0.geometry} material={materials.PaletteMaterial002} position={[0, 0.164, -0.063]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.102, 0.142, 0.162]} />
      <mesh geometry={nodes.x006_bottom_and_selectors_0.geometry} material={materials.PaletteMaterial003} position={[0, 0.276, 0.028]} scale={0.011} />
      <mesh geometry={nodes.x008_Material004_0.geometry} material={materials.PaletteMaterial004} position={[-0.044, 0.264, 0.036]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.x015_Material005_0.geometry} material={materials.PaletteMaterial005} position={[-0.038, 0.264, 0.036]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.cup001_cups_0.geometry} material={materials.PaletteMaterial006} position={[0.04, 0.113, -0.028]} rotation={[-Math.PI / 2, 0, 0]} scale={0.017} />
    </group>
  )
}

useGLTF.preload('/machine-transformed.glb')
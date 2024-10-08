/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 shoes.gltf --transform 
Files: shoes.gltf [17.51MB] > /Users/harshvardhansinghchauhan/Downloads/blender/shoe/shoes-transformed.glb [1.41MB] (92%)
Author: 打螺丝 (https://sketchfab.com/youoyouyou)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shoe-4b304f47126141489c6484addbbea50a
Title: shoe
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shoes-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/shoes-transformed.glb')

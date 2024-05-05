/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 floor.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Floor(props) {
  const { nodes, materials } = useGLTF('/floor.glb')
  return (
    <group {...props} dispose={null} position={[0,-7.2,0]}>
      <mesh  receiveShadow geometry={nodes.Plane.geometry} material={materials.AspaltPBR} scale={45.987} />
    </group>
  )
}

useGLTF.preload('/floor.glb')

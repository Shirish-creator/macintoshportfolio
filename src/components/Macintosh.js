import React from 'react';
import { useGLTF, useTexture,Html } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import * as THREE from 'three';



const Macintosh = (props) => {
  const { nodes } = useGLTF('/MacintoshCell.glb');
  const standardMaterial = new MeshStandardMaterial({
    color: 0xffffff, // Adjust color as needed
    roughness: 0.5, // Adjust roughness as needed
    metalness: 0.5, // Adjust metalness as needed
  });
  const bakedTexture=useTexture('/BAKEDMACINTOSH2.jpg')
  const bakedPlaneTexture=useTexture('/planebaked.jpg')

console.log(nodes)
  return (
    <>
    <group  position={[0,0,-13]}>
    {/* <mesh  scale={1.2} position={[1,1,1]}   geometry={nodes.screen.geometry}
        >
          
        </mesh> */}

      {[...Array(11).keys()].map((index) => (
        <mesh 
        key={index} geometry={nodes.MAC.children[index].geometry} >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} ></meshBasicMaterial>
        </mesh>
      ))}
      <mesh
      rotation={[0,Math.PI, 0]} // Rotate 180 degrees around the Y axis

    scale={70} 
    geometry={nodes.Plane.geometry}
    position={[0,-7.2,-10]}
    >
      <meshBasicMaterial map={bakedPlaneTexture} map-flipY={true} ></meshBasicMaterial>
    </mesh>
   
     <mesh  position={[-0.15, 2, 6.5]} rotation={[-0.13,0,0]}> 
          <planeGeometry args={[8, 7]} /> 
          <meshBasicMaterial side={THREE.FrontSide} /> Set basic material with red color
          <Html 
          style={{userSelect:"none",WebkitUserSelect:"none"}}
          transform
          wrapperClass='htmlScreen'
          
          >
            
          <iframe
          style={{width:"1300px", height:"990px",transform:"scale(0.23)"}}
          src={"https://www.shirishshakya.com/"}
          
        />
          </Html>
        </mesh>
    </group>
    
        

    </>
  );
};

useGLTF.preload('/MacintoshCell.glb');

export default Macintosh;

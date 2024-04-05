import React, { useRef,useState } from 'react';
import { useGLTF,Html } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import { useThree } from 'react-three-fiber';

export function Playstation({props,orbitControlsActive}) {
  const { nodes, materials } = useGLTF('/playstation.glb');
  const lidRef = useRef();
  const [isFrameActive, setIsFrameActive] = useState(false);


  const handleButtonClick = () => {
    setIsFrameActive(!isFrameActive); // Toggle the state to activate/deactivate useFrame
  };
  // Update lidRef position in every frame
  useFrame(() => {
    if (isFrameActive) {
      // Example: Update the y position of the lidRef mesh in each frame
      lidRef.current.position.y =-5 // Increment y position by 0.1 units in each frame
    }else{
      lidRef.current.position.y =5 // Increment y position by 0.1 units in each frame

    }
  });

  return (
    <group {...props} dispose={null}>
      {!orbitControlsActive &&
      <Html
              occlude
              position={[-12, -4, 10]}
              transform
              scale={1}
              style={{ userSelect: "none", WebkitUserSelect: "none" }}
              wrapperClassName='htmlScreen'
              
          >
          <button className={ 'iconButton'} style={{ color: "white" }} onClick={handleButtonClick}>
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              
            
            
          </button>
          </Html>}
      <group scale={0.01} position={[-13, -6.5, 6]} rotation={[0, -1, 0]}>
        <mesh castShadow   geometry={nodes.MainBody_LP_1_phong1_0.geometry} material={materials.phong1} />
        <mesh castShadow   ref={lidRef}  geometry={nodes.MainBody_LP_2_phong1_0.geometry} material={materials.phong1} >
          
        </mesh>
        <mesh castShadow   geometry={nodes.MainBody_LP_3_phong1_0.geometry} material={materials.phong1} position={[1.655, 0, 0]} >
        
        </mesh>
        <mesh castShadow  receiveShadow geometry={nodes.MainBody_LP_4_phong1_0.geometry} material={materials.phong1} />
        <mesh castShadow  receiveShadow geometry={nodes.MainBody_LP_5_phong1_0.geometry} material={materials.phong1} />
      </group>
    </group>
  );
}

useGLTF.preload('/playstation.glb');

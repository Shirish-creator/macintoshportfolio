import React from 'react';
import { useGLTF, useTexture,Html } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useFrame } from "react-three-fiber";
import { useRef,useState,useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { TransformControls, PivotControls,Environment } from '@react-three/drei';
import { useControls } from 'leva';
import { useLoader } from 'react-three-fiber';
import { PresentationControls } from '@react-three/drei';
import { BlendFunction } from 'postprocessing';
import * as TWEEN from '@tweenjs/tween.js'
import Computer from './computer';
import Floppy from './floppy';

const Scene = ({ standardCameraPosition  }) => {
  const mesh = useRef();


  
  const { nodes } = useGLTF('/MacintoshCell.glb');
  const [isPortfolioActive, setIsPortfolioActive] = useState(false);

  const bakedPlaneTexture=useTexture('/planebaked2.jpg')

  const handlePortfolioActivation = () => {
    setIsPortfolioActive(true);
    // Do something else when the portfolio is activated
  };

  

  return (
    <>
    
      {/* <OrbitControls
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={-Math.PI / 12}
          maxPolarAngle={ Math.PI / 2}
          minDistance={3}
          maxDistance={30}
          zoom0={false}
        /> */}
        
        <EffectComposer multisampling={0}>
          <Vignette
          offset={0.3}
          darkness={0.8}/>
          <Glitch
          delay={[4,4]}
          duration={[0.01, 0.03]}
          strength={[2,2]}
          />
          {/* <DepthOfField
          focusDistance={0.1}
          // focalLength={0.15}
          bokehScale={2}
          /> */}
          <Noise
          
          blendFunction={BlendFunction.MULTIPLY}
          />
        </EffectComposer>

           <PresentationControls 
             snap={ false}
             azimuth={[-Math.PI / 1, Math.PI / 1]}
          global
          config={{mass:2, tension:100}}
          polar={[-Math.PI / 12, Math.PI / 4]}

          >    
          

    <group ref={mesh} 
     position={[0,0,0]}
     >
      
      <Computer standardCameraPosition={standardCameraPosition} isPortfolioActive={isPortfolioActive} />

      <Floppy onPortfolioActivate={handlePortfolioActivation}/>
      
 
      <mesh
        rotation={[0,0, 0]} // Rotate 180 degrees around the Y axis
        scale={1} 
        geometry={nodes.Plane.geometry}
        position={[0.1,-7.2,-0.6]}
        castShadow 
        receiveShadow 
      >
      <meshStandardMaterial 
      color="0x121212"
      metalness={0.4}
      roughness={0.5}
      map={bakedPlaneTexture} map-flipY={false} 
      ></meshStandardMaterial>
    </mesh>
   
    </group>
    
    <pointLight color="white" castShadow  position={[0, -2, 5]} 
      intensity={isPortfolioActive? 200:600} 
     distance={15} />

      <pointLight color="purple" castShadow  position={[15, -2, 5]}   intensity={400} distance={0} />
      <pointLight color="orange" castShadow  position={[-10, -2, 5]}   intensity={400} distance={0} />
      
    </PresentationControls> 

    </>
  );
};

useGLTF.preload('/MacintoshCell.glb');

export default Scene;

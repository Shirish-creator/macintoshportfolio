import React from 'react';
import { useGLTF, useTexture,Html, RenderCubeTextur, MeshReflectorMaterial } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useFrame } from "react-three-fiber";
import { useRef,useState,useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { TransformControls, PivotControls,Environment } from '@react-three/drei';
import { useControls } from 'leva';
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'
import * as TWEEN from '@tweenjs/tween.js'
import Computer from './computer';
import Floppy from './floppy';
import { Iphone } from './Iphone';
import { Playstation } from './Playstation';
import { useThree } from 'react-three-fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { ChromaticAberration } from '@react-three/postprocessing'
import { Grid } from '@react-three/postprocessing'
import { ToneMapping } from '@react-three/postprocessing'


const Scene = ({ orbitControlsActive,cameraStart, handleOrbitControlsToggle,handleUiControlsToggle,showUiControls,handleCameraStart  }) => {
  const mesh = useRef();

  const meshRef1 = useRef();
  const cameraref=useRef();
  const { camera } = useThree();
  const mouse = useRef([0, 0]);
  const originalCameraPosition = [0, 0, 40]; // Store the original camera position


  
  
  const { nodes } = useGLTF('/MacintoshCell.glb');
  const [isPortfolioActive, setIsPortfolioActive] = useState(false);

  const bakedPlaneTexture=useTexture('/planebaked2.jpg')
  const standardCameraPosition = { x: 0, y: 0, z: 40 };
  const standardCameraRotation = { x: 0, y: 0, z: 0 };



  const handlePortfolioActivation = () => {
    setIsPortfolioActive(true);
    // Do something else when the portfolio is activated
   
  };

 
  
  

  return (
    <>
    
              <PerspectiveCamera ref={cameraref} makeDefault position={[standardCameraPosition.x, standardCameraPosition.y, standardCameraPosition.z]} />

        

          
          
    {orbitControlsActive && <OrbitControls 
    // minAzimuthAngle={-Math.PI / 2}
    // maxAzimuthAngle={Math.PI / 2}
    minPolarAngle={-Math.PI / 12}
    maxPolarAngle={ Math.PI / 2}
    maxDistance={50}
    zoom0={false}
    />
    
    }
    

        
    <group ref={mesh} 
     position={[0,0,0]}
     >
      
      <Computer cameraStart={cameraStart} handleCameraStart={handleCameraStart} handleUiControlsToggle={handleUiControlsToggle} showUiControls={showUiControls} standardCameraPosition={standardCameraPosition} standardCameraRotation={standardCameraRotation} orbitControlsActive={orbitControlsActive}  isPortfolioActive={isPortfolioActive} />

      <Floppy handleUiControlsToggle={handleUiControlsToggle} showUiControls={showUiControls} standardCameraPosition={standardCameraPosition} standardCameraRotation={standardCameraRotation} orbitControlsActive={orbitControlsActive} onPortfolioActivate={handlePortfolioActivation}/>
  
 
      <mesh
        rotation={[0,0, 0]} // Rotate 180 degrees around the Y axis
        scale={1} 
        ref={meshRef1}
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
    <pointLight color="white" castShadow  position={[0, -2, 5]} 
      intensity={isPortfolioActive? 200:600} 
     distance={15} />

      <pointLight color="purple" castShadow  position={[15, -2, 5]}   intensity={400} distance={0} />
      <pointLight color="orange" castShadow  position={[-10, -2, 5]}   intensity={400} distance={0} />
      {/* <Iphone/> */}
      {/* <Playstation orbitControlsActive={orbitControlsActive}/> */}
    </group>
    
    
    {/* </PresentationControls>  */}
    


    </>
  );
};

useGLTF.preload('/MacintoshCell.glb');

export default Scene;

import React from 'react';
import { useGLTF, useTexture,Html, RenderCubeTexture } from '@react-three/drei';
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
import { Iphone } from './Iphone';
import { Playstation } from './Playstation';
import { useThree } from 'react-three-fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Halant } from 'next/font/google';
import { ChromaticAberration } from '@react-three/postprocessing'
import { Grid } from '@react-three/postprocessing'
import { SSAO } from '@react-three/postprocessing'
import { ToneMapping } from '@react-three/postprocessing'

const Scene = ({ orbitControlsActive, handleOrbitControlsToggle,handleUiControlsToggle,showUiControls }) => {
  const mesh = useRef();
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
          {/* <pointLight position={[0,100,0] } color="white" intensity={100000}></pointLight> */}
          <Noise
          
          blendFunction={BlendFunction.MULTIPLY}
          />
          <ChromaticAberration
    blendFunction={BlendFunction.NORMAL} // blend mode
    offset={[0.0015, 0.001]} // color offset
  />
   <Grid
    blendFunction={BlendFunction.OVERLAY} // blend mode
    scale={2.0} // grid pattern scale
    lineWidth={0.0} // grid pattern line width
    // size={{ 10, height }} // overrides the default pass width and height
  />
   <SSAO
    blendFunction={BlendFunction.NORMAL} // blend mode
    samples={20} // amount of samples per pixel (shouldn't be a multiple of the ring count)
    rings={4} // amount of rings in the occlusion sampling pattern
    distanceThreshold={1.0} // global distance threshold at which the occlusion effect starts to fade out. min: 0, max: 1
    distanceFalloff={3.0} // distance falloff. min: 0, max: 1
    rangeThreshold={0.5} // local occlusion range threshold at which the occlusion starts to fade out. min: 0, max: 1
    rangeFalloff={0.1} // occlusion range falloff. min: 0, max: 1
    luminanceInfluence={3.9} // how much the luminance of the scene influences the ambient occlusion
    radius={50} // occlusion sampling radius
    scale={100.5} // scale of the ambient occlusion
    bias={4.5} // occlusion bias
  />
   <ToneMapping
    blendFunction={BlendFunction.NORMAL} // blend mode
    adaptive={true} // toggle adaptive luminance map usage
    resolution={2400} // texture resolution of the luminance map
    middleGrey={20.6} // middle grey factor
    maxLuminance={1000.0} // maximum luminance
    averageLuminance={500.0} // average luminance
    adaptationRate={1.0} // luminance adaptation rate
  />
        </EffectComposer>

          
          
    {orbitControlsActive && <OrbitControls 
    minAzimuthAngle={-Math.PI / 2}
    maxAzimuthAngle={Math.PI / 2}
    minPolarAngle={-Math.PI / 12}
    maxPolarAngle={ Math.PI / 2}
    maxDistance={50}
    zoom0={false}
    />}

        
    <group ref={mesh} 
     position={[0,0,0]}
     >
      
      <Computer handleUiControlsToggle={handleUiControlsToggle} showUiControls={showUiControls} standardCameraPosition={standardCameraPosition} standardCameraRotation={standardCameraRotation} orbitControlsActive={orbitControlsActive}  isPortfolioActive={isPortfolioActive} />

      <Floppy handleUiControlsToggle={handleUiControlsToggle} showUiControls={showUiControls} standardCameraPosition={standardCameraPosition} standardCameraRotation={standardCameraRotation} orbitControlsActive={orbitControlsActive} onPortfolioActivate={handlePortfolioActivation}/>
  
 
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
    <pointLight color="white" castShadow  position={[0, -2, 5]} 
      intensity={isPortfolioActive? 200:600} 
     distance={15} />

      <pointLight color="purple" castShadow  position={[15, -2, 5]}   intensity={400} distance={0} />
      <pointLight color="orange" castShadow  position={[-10, -2, 5]}   intensity={400} distance={0} />
      {/* <Iphone/> */}
      <Playstation orbitControlsActive={orbitControlsActive}/>
    </group>
    
    
    {/* </PresentationControls>  */}
    


    </>
  );
};

useGLTF.preload('/MacintoshCell.glb');

export default Scene;

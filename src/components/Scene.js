import React from 'react';
import { useGLTF, useTexture,Html, RenderCubeTextur, MeshReflectorMaterial } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette,SSAO, SMAA, Selection, Outline } from '@react-three/postprocessing';
import { Bounds } from '@react-three/drei';
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
import { Miles } from './Miles';
import { Omnitrix } from './Omnitrix';
import { Floor } from './Floor';

const Scene = ({ orbitControlsActive,cameraStart, handleOrbitControlsToggle,handleUiControlsToggle,showUiControls,handleCameraStart  }) => {
  const mesh = useRef();

  const meshRef1 = useRef();
  const cameraref=useRef();
  const { camera } = useThree();
  const mouse = useRef([0, 0]);
  const originalCameraPosition = [0, 0, 40]; // Store the original camera position
  const [playStationActive,setPlaystaionActive]=useState(false);
  const [gameActive,setActiveGame]=useState("https://retrogamesonline.io/play/tekken-3");
  
  const PlaystationActivation=()=>{
    setPlaystaionActive(prevState => !prevState);
  }

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
    
              <PerspectiveCamera ref={cameraref} makeDefault  position={[standardCameraPosition.x, standardCameraPosition.y, standardCameraPosition.z]} />

              <Selection>
    <EffectComposer multisampling={0} autoClear={false} enableNormalPass>
    {/* <Vignette
    offset={0.3}
    darkness={0.8}/>
    <Glitch
    delay={[4,4]}
    duration={[0.01, 0.03]}
    strength={[2,2]}
    /> */}
   
    
    <Noise
    
    blendFunction={BlendFunction.MULTIPLY}
    />
    <ChromaticAberration
blendFunction={BlendFunction.NORMAL} // blend mode
offset={[0.0010, 0.0016]} // color offset
/>
<Outline blur visibleEdgeColor="white" edgeStrength={10} width={1000} />
{/* 
<Grid
blendFunction={BlendFunction.OVERLAY} // blend mode
scale={2.0} // grid pattern scale
lineWidth={0.0} // grid pattern line width
// size={{ 10, height }} // overrides the default pass width and height
/> */}
{!playStationActive && 
<>
          <Miles/> 
          <Omnitrix/>  
          {/* <Bloom/> */}
</>


}          
<Playstation gameActive={gameActive} setActiveGame={setActiveGame} PlaystationActivation={PlaystationActivation} handleUiControlsToggle={handleUiControlsToggle} orbitControlsActive={orbitControlsActive} standardCameraPosition={standardCameraPosition} standardCameraRotation={standardCameraRotation}/>

  </EffectComposer>
  </Selection>

    

          
          
    {orbitControlsActive && <OrbitControls 
    
    minPolarAngle={-Math.PI / 12}
    maxPolarAngle={ Math.PI / 2}
    maxDistance={45}
    zoom0={true}
    />
    
    }
    
    
        
    <group ref={mesh} 
     position={[0,0,0]}
     >
      
      <Computer gameActive={gameActive} playStationActive={playStationActive} cameraStart={cameraStart} handleCameraStart={handleCameraStart} handleUiControlsToggle={handleUiControlsToggle} showUiControls={showUiControls} standardCameraPosition={standardCameraPosition} standardCameraRotation={standardCameraRotation} orbitControlsActive={orbitControlsActive}  isPortfolioActive={isPortfolioActive} />
     
      <Floppy handleUiControlsToggle={handleUiControlsToggle} showUiControls={showUiControls} standardCameraPosition={standardCameraPosition} standardCameraRotation={standardCameraRotation} orbitControlsActive={orbitControlsActive} onPortfolioActivate={handlePortfolioActivation}/>
  
 {/* original floor */}
      <mesh
        rotation={[0,0, 0]} // Rotate 180 degrees around the Y axis
        scale={1} 
        ref={meshRef1}
        geometry={nodes.Plane.geometry}
        position={[0.1,-7.20,-0.6]}
        castShadow 
        receiveShadow 
      >
     
      
     <meshStandardMaterial 
      metalness={0.4}
      roughness={0.5}
      map={bakedPlaneTexture} map-flipY={false} 
      ></meshStandardMaterial>
    </mesh>
    {/* <pointLight color="white" castShadow  position={[0, -2, 5]} 
      intensity={isPortfolioActive? 200:600} 
     distance={15} /> */}
{/* 
      <pointLight color="purple" castShadow  position={[15, -2, 5]}   intensity={500} distance={0} />
      <pointLight color="orange" castShadow  position={[-10, -2, 5]}   intensity={400} distance={0} /> */}
      {/* <Iphone/> */}
        {/* <Floor/> */}
    </group>
    
    
    


    </>
  );
};

useGLTF.preload('/MacintoshCell.glb');

export default Scene;

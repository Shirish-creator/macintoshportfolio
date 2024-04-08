import { Canvas, useThree,Html } from "react-three-fiber";
import { Suspense } from "react";
import Scene from "./Scene"
import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as Three from 'three';
import {useProgress} from '@react-three/drei';
import LoadingScreen from "./Loader";
// import { Loader } from '@react-three/drei'

export default function Threed({ orbitControlsActive,handleOrbitControlsToggle,handleUiControlsToggle,showUiControls,handleSetLoadedScreen}) {
const standardCameraPosition=[0, 1, 20];



return (
    <>
          <LoadingScreen handleSetLoadedScreen={handleSetLoadedScreen}/>

      <Canvas 
      gl={{
        antialias:true,
    
      }}
      shadows 
        style={{ height: "100vh" }}
        className="w-full h-screen "
        camera={{
          fov:110,
          near:0.5,
          far:1000,
          
          position: [0, 1, 22]        }}
      >
       
       
        <color args={['#000000']} attach="background" />
        
        <Suspense 
        // fallback={<LoadingScreen />} 
        >
     
          <Scene orbitControlsActive={orbitControlsActive}
          handleUiControlsToggle={handleUiControlsToggle}
          showUiControls={showUiControls}
          handleOrbitControlsToggle={handleOrbitControlsToggle}  />
        </Suspense>
      </Canvas>
      
    </>
  );
}

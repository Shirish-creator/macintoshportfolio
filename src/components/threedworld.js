import { Canvas, useThree } from "react-three-fiber";
import { Suspense } from "react";
import Scene from "./Scene"
import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as Three from 'three';

export default function Threed() {
const standardCameraPosition=[0, 1, 20];

return (
    <>
    
      <Canvas 
      gl={{
        antialias:true,
    
      }}
      shadows 
        style={{ height: "100vh" }}
        className="w-full h-screen "
        camera={{
          fov:102,
          near:0.5,
          far:1000,
          
          position: [0, 1, 20]        }}
      >
       
       
        <color args={['#000000']} attach="background" />
        
        <Suspense>
     
          <Scene standardCameraPosition={standardCameraPosition}  />
        </Suspense>
      </Canvas>
    </>
  );
}

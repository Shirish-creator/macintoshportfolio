import { Canvas, useThree } from "react-three-fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import Macintosh from "./Macintosh"
import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as Three from 'three';

export default function Threed() {

  // const [cameraPosition, setCameraPosition] = useState(); // Initial camera position

return (
    <>
      <Canvas 
      gl={{
        antialias:true,
    
      }}
        style={{ height: "100vh" }}
        className="w-full h-screen "
        camera={{
          fov:95,
          near:0.1,
          far:1000,
          // position: cameraPosition, // Use state for camera position
        }}
      >
       
      
        <color args={['#000000']} attach="background" />
        <Suspense fallback={<Loader/>}>
     
          <Macintosh  />
        </Suspense>
      </Canvas>
    </>
  );
}

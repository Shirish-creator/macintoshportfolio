import { Canvas, useThree } from "react-three-fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import Macintosh from "./Macintosh"
import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as Three from 'three';

export default function Threed() {


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
          position:[0,1,8]
        }}
      >
       
      
        <color args={['#000000']} attach="background" />
        <Suspense fallback={<Loader/>}>
     
          <Macintosh />
        </Suspense>
      </Canvas>
    </>
  );
}

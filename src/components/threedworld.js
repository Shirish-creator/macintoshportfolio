import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import Macintosh from "./Macintosh"
import {  OrthographicCamera, Stats, OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from "@react-three/drei";

export default function Threed() {
 
  return (
    <>
    
    
    <Canvas 
            style={{ height: "100vh" }} // Set background color to black
            
    className="w-full h-screen "
   
    >
      <perspectiveCamera
          fov={1000}
         
          position={[0,2, 0]}
          ></perspectiveCamera>
      <OrbitControls
  minAzimuthAngle={-Math.PI / 2}
  maxAzimuthAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 5}
  maxPolarAngle={Math.PI / 0}
  minDistance={2} // Set your minimum distance here
  maxDistance={100} // Set your maximum distance here
/>
<color args={['#000000']} attach="background"></color>
        <Suspense fallback={<Loader/>}>
          
      <ambientLight intensity={1} position={[1,1,1] }/>
       <directionalLight position={[200,500,1] } intensity={1}/>
      <directionalLight position={[-0.986, 0.817, -0.056] } intensity={.4}/>

    
     
       <hemisphereLight skyColor="#b1e1ff" intensity={0.4} groundColor={"#000000"}/> 
    
      <Macintosh />
    </Suspense>
    </Canvas>
    
    
    
    
    </>
  );
}


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

const Macintosh = ({ setCameraPosition }) => {
  const mesh = useRef();
  const [zoomactive, setzoomactive] = useState(false);

  const { nodes } = useGLTF('/MacintoshCell.glb');
 
  const bakedTexture=useTexture('/BAKEDMACINTOSH2.jpg')
  const bakedPlaneTexture=useTexture('/planebaked.jpg')

       

         

          useFrame(({ camera }) => {
            TWEEN.update(); // Update tween.js on every frame
        
            // Define target camera position and duration based on the 'active' state
            const targetCameraPosition = zoomactive ? [0, 2, 10] : [0, 0, 22];
            const duration = 1000; // Duration of the tween animation in milliseconds
        
            // Create a new tween animation for the camera position
            new TWEEN.Tween(camera.position)
            
              .to({ x: targetCameraPosition[0], y: targetCameraPosition[1], z: targetCameraPosition[2] }, duration)
              .easing(TWEEN.Easing.Quadratic.Out) // Define easing function
              .start(); // Start the tween animation
          });

          const togglezoomactive = () => {
            setzoomactive(prevzoomActive => !prevzoomActive);
          };
          
useFrame(() => {

  // mesh.current.position.set(0,  active ? -2:0, active ? -3 :-13);
});



  return (
    <>
    
      {/* <OrbitControls
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 0}
          minDistance={3}
          maxDistance={50}
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
          focusDistance={0.025}
          focalLength={0.025}
          bokehScale={3}
          /> */}
          <Noise
          
          blendFunction={BlendFunction.MULTIPLY}
          />
        </EffectComposer>
         <ambientLight intensity={1} position={[1, 1, 1]} />
         
          <directionalLight position={[200, 500, 1]} intensity={1} />
          <directionalLight position={[-0.986, 0.817, -0.056]} intensity={.4} />
          <hemisphereLight skyColor="#b1e1ff" intensity={0.4} groundColor={"#000000"} />


          <PresentationControls 
          
          global
          config={{mass:2, tension:300}}
          >
    <group ref={mesh} 
     position={[0,0,0]}
     >

    {/* <mesh  scale={1.2} position={[1,1,1]}   geometry={nodes.screen.geometry}
        >
          
        </mesh> */}

      {[...Array(11).keys()].map((index) => (
        <mesh 
        
        key={index} geometry={nodes.MAC.children[index].geometry} >
          
          <meshBasicMaterial map={bakedTexture} map-flipY={false} ></meshBasicMaterial>
        </mesh>
      ))}
      <mesh
        rotation={[0,Math.PI, 0]} // Rotate 180 degrees around the Y axis
        scale={70} 
        geometry={nodes.Plane.geometry}
        position={[0,-7.2,-10]}
      >
      <meshBasicMaterial map={bakedPlaneTexture} map-flipY={true} ></meshBasicMaterial>
    </mesh>
    <Html 
          style={{userSelect:"none",WebkitUserSelect:"none"}}
          transform
          wrapperClass='htmlScreen'
         position={[0, zoomactive ? 4:6.2,zoomactive ?7.4:8.4]}
          // position={[0,  active ? 4:5.8, 8]}
          >
            
          <button className={zoomactive?'iconButton-sm':'iconButton'} style={{color:"white"}} onClick={togglezoomactive}>
            {zoomactive ?
         <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
         className="w-6 h-6"
       >
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
       </svg>
       
          :
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

          }</button>

          </Html>
     <mesh  position={[-0.15, 2, 6.5]} rotation={[-0.13,0,0]}> 
          <planeGeometry args={[8, 7]} /> 
          <meshBasicMaterial  toolMapped={false} /> Set basic material with red color
          <Html 
          style={{userSelect:"none",WebkitUserSelect:"none",transformStyle: "preserve-3d"}}
          transform
          wrapperClass='htmlScreen'
          
          >
            
          <iframe
          style={{width:"1300px", height:"990px",transform:"scale(0.23)"}}
          src={"https://www.shirishshakya.com/"}
          
        />
          </Html>
        </mesh>
    </group>
    </PresentationControls>
    {/* <primitive object={nodes.Scene}>
    <meshBasicMaterial map={bakedTexture} map-flipY={false} ></meshBasicMaterial>

    </primitive> */}
    

    </>
  );
};

useGLTF.preload('/MacintoshCell.glb');

export default Macintosh;

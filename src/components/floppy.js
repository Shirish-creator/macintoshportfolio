import React from 'react';
import { useGLTF, useTexture,Html,useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from "react-three-fiber";
import { useRef,useState,useEffect } from 'react';
import * as TWEEN from '@tweenjs/tween.js'
import { TransformControls } from '@react-three/drei';
import { useThree } from 'react-three-fiber';
import gsap from "gsap";


const Floppy = ({ onPortfolioActivate,orbitControlsActive,standardCameraPosition,standardCameraRotation }) => {
  const [zoomactive, setZoomActive] = useState(false);
  const { camera } = useThree();

  
   
    const { nodes,animations } = useGLTF('/floppy.glb');
    const groupRef = useRef(null);
    const ref=useRef();
    const [isVisible, setIsVisible] = useState(true);
    const { actions } = useAnimations(animations,ref);


    const [position, setPosition] = useState([5.5, -7.2, 5]);
    const [rotation, setRotation] = useState([0, 1.5, 0]); // Initial rotation

    const handleButtonClick = () => {
      // Toggle the zoomactive state
      setZoomActive(!zoomactive);
  
      // Define the target camera position based on the zoomactive state
      const targetPosition = { x: zoomactive ?0:12.5, y:zoomactive ?standardCameraPosition.y:-5, z: zoomactive ? standardCameraPosition.z : 6 };
      const targetRotation = { x: 0, y:zoomactive ?standardCameraRotation.y:1.5, z: 0 };

      // Tween the camera position
      gsap.to(camera.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 2, // Duration of the animation in seconds
        ease: "power2.out" // Easing function
      });
      // if(zoomactive){
      // camera.lookAt(groupRef.current.position)}
      gsap.to(camera.rotation, {
        x: targetRotation.x,
        y: targetRotation.y,
        z: targetRotation.z,
        duration: 2, // Duration of the animation in seconds
        ease: "power2.out" // Easing function
      });
     
    };
    

 
   
  const handleClick = () => {
    setIsVisible(false)

    actions.rotate.play();
    setTimeout(() => {
        actions.rotate.stop(); // Stop the animation
        onPortfolioActivate(true); // Pass true to indicate portfolio activation
      }, 4500); // Reset the animation to its initial state and play it

    // const initialPosition = { x: 5.5, y: -7.3, z: 5 };
    const intermediatePosition1 = { x: 5.5, y: -4, z: 12 };
    const intermediatePosition2 = { x: 2, y: -3, z: 12 };
    const intermediatePosition3 = { x: 2, y: -3, z: 3};
    const finalPosition = { x: 2, y: -3, z: 3};


    new TWEEN.Tween(groupRef.current.position)
      .to(intermediatePosition1, 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => setPosition([groupRef.current.position.x, groupRef.current.position.y, groupRef.current.position.z]))
      .start()
      .onComplete(() => {
        new TWEEN.Tween(groupRef.current.position)
          .to(intermediatePosition2, 1000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => setPosition([groupRef.current.position.x, groupRef.current.position.y, groupRef.current.position.z]))
          .start()
          .onComplete(() => {
            new TWEEN.Tween(groupRef.current.position)
              .to(intermediatePosition3, 3000)
              .easing(TWEEN.Easing.Quadratic.Out)
              .onUpdate(() => setPosition([groupRef.current.position.x, groupRef.current.position.y, groupRef.current.position.z]))
              .start()
              .onComplete(() => {
                new TWEEN.Tween(groupRef.current.position)
                  .to(finalPosition, 4000)
                  .easing(TWEEN.Easing.Quadratic.Out)
                  .onUpdate(() => setPosition([groupRef.current.position.x, groupRef.current.position.y, groupRef.current.position.z]))
                  .start();

              
              });
          });
      });

  };
  

useFrame(() => {
              TWEEN.update();
            });
  

    return (
        <>

         {isVisible & !orbitControlsActive && (
        <Html
          occlude
          position={[2, -2, 9]}
          
          scale={1}
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
          transform
          wrapperClassName='htmlScreen'
        >
          <button className='iconButton' style={{ color: "white" }} onClick={handleClick}>
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="currentColor"
  className="bi bi-floppy"
  viewBox="0 0 16 16"
>
  <path d="M11 2H9v3h2z" />
  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
</svg>


          </button>
        </Html>
        
      )}
{isVisible & !orbitControlsActive && (
      <Html
          occlude
          position={zoomactive?[5.5, -3,5]:[5.5, -3,5]}
          rotation={zoomactive?[0,1.5,0]:[0,1.5,0]}
          scale={1}
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
          transform
          wrapperClassName='htmlScreen'
        >
          <button className='iconButton' style={{ color: "white" }} onClick={handleButtonClick}>{zoomactive?
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
  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6"
/>
</svg>
:<svg
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
  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
/>
</svg>
}        


          </button>
        </Html>)}

          <group scale={4} rotation={rotation} ref={groupRef}  position={position} >
            <mesh ref={ref}>
            <primitive object={nodes.Scene}>
              <meshStandardMaterial attach="material" receiveShadow castShadow />
            </primitive>
            </mesh>
    
            
          </group>
        </>
      );
    };
  
  useGLTF.preload('/floppy.glb');
  
  export default Floppy;
  
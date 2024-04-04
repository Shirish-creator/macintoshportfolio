import React from 'react';
import { useGLTF, useTexture,Html,useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from "react-three-fiber";
import { useRef,useState,useEffect } from 'react';
import * as TWEEN from '@tweenjs/tween.js'
import { TransformControls } from '@react-three/drei';
import { useThree } from 'react-three-fiber';
import gsap from "gsap";


const Floppy = ({ onPortfolioActivate }) => {
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
      const targetPosition = { x: 0, y:zoomactive ?1:-2, z: zoomactive ? 20 : 11.5 };
  
      // Tween the camera position
      gsap.to(camera.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
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

         {isVisible && (
        <Html
          occlude
          position={[2, -3, 8]}
          
          scale={1}
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
          transform
          wrapperClassName='htmlScreen'
        >
          <button className='iconButton' style={{ color: "white" }} onClick={handleClick}>
          <svg
  width={24}
  height={28}
  viewBox="0 0 24 28"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.75 16.5776C3.75 15.7063 4.45634 15 5.32765 15H18.5039C19.3752 15 20.0815 15.7063 20.0815 16.5776V25.1441H3.75V16.5776Z"
    stroke="#F7F7F7"
    strokeWidth="0.88983"
  />
  <path
    d="M16.6914 9.38095L7.30863 9.38095C6.78971 9.38095 6.36905 8.96029 6.36905 8.44137L6.36905 2.61905L17.25 2.61905C17.4604 2.61905 17.631 2.78961 17.631 3L17.631 8.44137C17.631 8.96029 17.2103 9.38095 16.6914 9.38095Z"
    stroke="#F7F7F7"
    strokeWidth="0.738098"
  />
  <path
    d="M13.5 5.05863C13.5 4.33589 14.0859 3.75 14.8086 3.75C15.5314 3.75 16.1173 4.33589 16.1173 5.05863V6.69441C16.1173 7.41714 15.5314 8.00304 14.8086 8.00304C14.0859 8.00304 13.5 7.41715 13.5 6.69441V5.05863Z"
    stroke="#F7F7F7"
    strokeWidth="0.738098"
  />
  <path
    d="M1.94492 24.7747V3.03882C1.94492 2.84889 2.09889 2.69492 2.28882 2.69492H18.148C18.2367 2.69492 18.322 2.7292 18.386 2.79061L21.2373 5.52499C21.305 5.58985 21.3432 5.6795 21.3432 5.7732V24.7747C21.3432 24.9647 21.1892 25.1186 20.9993 25.1186H2.28882C2.09889 25.1186 1.94492 24.9647 1.94492 24.7747Z"
    stroke="#F7F7F7"
    strokeWidth="0.88983"
  />
</svg>

          </button>
        </Html>
        
      )}
{isVisible && (
      <Html
          occlude
          position={[5.5, -3, 5]}
          rotation={[0,1.5,0]}
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
  
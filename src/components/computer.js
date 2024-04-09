import { useGLTF, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from "react-three-fiber";
import { useRef, useState, useEffect } from 'react';
import * as TWEEN from '@tweenjs/tween.js'
import Keyboard from './keyboard';
import gsap from "gsap";
import { useThree } from 'react-three-fiber';

const Computer = ({cameraStart, isPortfolioActive,orbitControlsActive,standardCameraPosition,standardCameraRotation,handleUiControlsToggle,showUiControls }) => {
  const mesh = useRef();
  const [zoomactive, setZoomActive] = useState(false);
  const { camera } = useThree();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const { nodes } = useGLTF('/MacintoshCell.glb');
  const bakedTexture = useTexture('/BAKEDMACINTOSH2.jpg')

const keydown=()=>{
  console.log('hello')
  const sound = new Audio('/keyboard-key.mp3');
        sound.play();
}



  const handleButtonClick = () => {
    // Toggle the zoomactive state
    const sound = new Audio('/whoosh.mp3'); // Replace 'path_to_your_sound_clip.mp3' with the actual path to your sound clip
    sound.play();
    setZoomActive(!zoomactive);
    handleUiControlsToggle();

  

    // Define the target camera position based on the zoomactive state
    const targetPosition = { x: 0, y:zoomactive?standardCameraPosition.y: 3, z: zoomactive ? standardCameraPosition.z : 15 };
    const targetRotation = { x: 0, y:zoomactive ?standardCameraRotation.y:0, z: 0 };

    // Tween the camera position
    gsap.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: 1, // Duration of the animation in seconds
      ease: "power2.out" // Easing function
    });
    gsap.to(camera.rotation, {
      x: targetRotation.x,
      y: targetRotation.y,
      z: targetRotation.z,
      duration: 1, // Duration of the animation in seconds
      ease: "power2.out" // Easing function
    });
  };


  useEffect(() => {
    if (cameraStart) {
      
  gsap.from(camera.position, {
    x: -15,
    y: 7,
    z: 2,
    duration: 3,
    ease: "power2.out"
  });

  gsap.to(camera.position, {
    x: standardCameraPosition.x,
    y: standardCameraPosition.y,
    z: standardCameraPosition.z,
    duration: 3,
    ease: "power2.in"
  });
  console.log('ended')

  gsap.from(camera.rotation, {
    x: 0,
    y: -5,
    z: 0,
    duration: 3,
    ease: "power2.out"
  });
  gsap.to(camera.rotation, {
    x: standardCameraRotation.x,
    y: standardCameraRotation.y,
    z: standardCameraRotation.z,
    duration: 3,
    ease: "power2.out"
  });
    }
  }, [cameraStart])


  

  return (
    <>
      <group ref={mesh} position={[0, 0, 0]}>
        <pointLight color="white" castShadow position={[0, 16, 13]} receiveShadow intensity={1000} distance={100000} shadow-mapSize-width={512} shadow-mapSize-height={1000} shadow-camera-far={2000} shadow-camera-near={10} shadow-camera-left={-5} shadow-camera-right={5} shadow-camera-top={5} shadow-camera-bottom={-5} />
        {[...Array(11).keys()].map((index) => (
          <mesh
            castShadow
            receiveShadow
            key={index} geometry={nodes.MAC.children[index].geometry}>
            <meshStandardMaterial map={bakedTexture} map-flipY={false}></meshStandardMaterial>
          </mesh>
        ))}

        <Html
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
          transform
          wrapperClass='htmlScreen'
          occlude
          position={[0, zoomactive ? 4 : 6.3, zoomactive ? 7.4 : 9.4]}>
          {!orbitControlsActive&&
          <button className={zoomactive ? 'iconButton-sm' : 'iconButton'} style={{ color: "white" }} onClick={handleButtonClick}>
            {zoomactive ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            }
          </button>}
        </Html>

        <Html
        zIndexRange={[20, 0]}
          position={[0, 2, 6.5]} rotation={[-0.13, 0, 0]}
          style={{userSelect:"none",WebkitUserSelect:"none",transformStyle: "preserve-3d"}}
          transform
          
          wrapperClass='htmlScreen'
                    occlude
                    className='iframescreencontainer'
                    >
          <iframe     
            style={{ width: "1300px", height: "990px", transform: "scale(0.23)" }}

            src={isPortfolioActive ? "https://www.shirishshakya.com/" : "https://humorous-guest-092420.framer.app/"}
          />
        </Html>

        {/* <mesh
          position={[0, 0, -0.42]}
          geometry={nodes.screen.geometry}>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh> */}
        <Keyboard />
      </group>
    </>
  );
};

useGLTF.preload('/MacintoshCell.glb');

export default Computer;

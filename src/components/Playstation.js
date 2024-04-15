import React, { useRef,useState } from 'react';
import { useGLTF,Html } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import { useThree } from 'react-three-fiber';
import gsap from 'gsap';
import * as THREE from 'three';

export function Playstation({PlaystationActivation, orbitControlsActive, standardCameraPosition, standardCameraRotation, handleUiControlsToggle}) {
  const { nodes, materials } = useGLTF('/playstation2.glb');
  const powerref = useRef();
  const [zoomactive, setZoomActive] = useState(false);
  const { camera } = useThree();

  const [isFrameActive, setIsFrameActive] = useState(false);
  const [indicatorMaterial, setGreenEmissiveMaterial] = useState(materials.phong1);

//   const [greenEmissiveMaterial, setGreenEmissiveMaterial] = useState(() => {
//     // Create the green emissive material
//     return new THREE.MeshBasicMaterial({
//         color: 0x00ff00, // Green color
//         emissive: 0x00ff00, // Green emissive color
//         emissiveIntensity: 1, // Emissive intensity (adjust as needed)
//         side: THREE.DoubleSide, // Render the material on both sides of the geometry
//         // Add any other material properties you need
//     });
// });


  const handleButtonClick = () => {
    setZoomActive(!zoomactive);
    handleUiControlsToggle();

    // Define the target camera position based on the zoomactive state
    const targetPosition = { x: zoomactive ?0:-12.5, y:zoomactive ? standardCameraPosition.y:-2, z: zoomactive ? standardCameraPosition.z : 12 };
    const targetRotation = { x:zoomactive?standardCameraRotation.x: -.5, y:zoomactive ?standardCameraRotation.y:0, z: 0 };

    // Tween the camera position
    gsap.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: 1.5, // Duration of the animation in seconds
      ease: "power1.in" // Easing function
    });
    // if(zoomactive){
    // camera.lookAt(groupRef.current.position)}
    gsap.to(camera.rotation, {
      x: targetRotation.x,
      y: targetRotation.y,
      z: targetRotation.z,
      duration: 1.5, // Duration of the animation in seconds
      ease: "power1.out" // Easing function
    });
  //  Toggle the state to activate/deactivate useFrame
  };
  // Update lidRef position in every frame
  useFrame(() => {
    if (isFrameActive) {
        // If frame is active, update mesh position and set emissive material
        powerref.current.position.y = -2; // Example: Increment y position by -2 units in each frame
        setGreenEmissiveMaterial(new THREE.MeshStandardMaterial({
            color: 0x00ff00, // Green color
emissive:0x00ff00,
emissiveIntensity:2,
            side: THREE.DoubleSide, // Render the material on both sides of the geometry
            // Add any other material properties you need
        }));
    } else {
        // If frame is not active, update mesh position and set initial material
        powerref.current.position.y = 2; // Example: Increment y position by 2 units in each frame
        setGreenEmissiveMaterial(materials.phong1);
    }
});
const powerButton = () => {
  setIsFrameActive(!isFrameActive);
  setTimeout(() => {
    PlaystationActivation();

    handleButtonClick();
  }, 750); // 1.5 seconds delay
};

  return (
    <group  dispose={null}>
      {!orbitControlsActive &&
      <Html
              occlude
              position={[-14, -5, 5]}
              transform
              scale={1}
              style={{ userSelect: "none", WebkitUserSelect: "none" }}
              wrapperClassName='htmlScreen'
              
          >
          <button className={ 'iconButton'} style={{ color: "white" }} onClick={handleButtonClick}>
            
          {zoomactive?
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
          </Html>}
          <group position={[1.927, 0, -3.697]} rotation={[-Math.PI / 2, 0, 0]} scale={1.958}>
        <group position={[0.843, 0.502, 0]}>
          <mesh castShadow geometry={nodes.Object_7.geometry} material={materials['DeathtrapDungeon.001']} position={[-6.5, -4.9, -3.6]} rotation={[ 1.55, -0.5, 0]} />
        </group>
      </group>   
      <group scale={0.01} position={[-13, -6.7, 6]} rotation={[0, -1, 0]}>
        
        <mesh castShadow   geometry={nodes.MainBody_LP_1_phong1_0.geometry} material={materials.phong1} />
        <mesh castShadow     geometry={nodes.MainBody_LP_2_phong1_0.geometry} material={materials.phong1} >
        <mesh geometry={nodes.Object_7.geometry} material={materials['DeathtrapDungeon.001']} position={[-1.189, -0.13, 0.685]} rotation={[-Math.PI / 2, 0, 0]} />

        </mesh>
        <mesh castShadow   geometry={nodes.MainBody_LP_3_phong1_0.geometry} material={materials.phong1} position={[1.655, 0, 0]} >
        <mesh ref={powerref} onClick={powerButton} geometry={nodes.powerbutton.geometry} material={materials.phong1} />
        <mesh geometry={nodes.lightindicator.geometry} material={indicatorMaterial} />

        </mesh>
        
        <mesh castShadow  receiveShadow geometry={nodes.MainBody_LP_4_phong1_0.geometry} material={materials.phong1} />
        <mesh castShadow  receiveShadow geometry={nodes.MainBody_LP_5_phong1_0.geometry} material={materials.phong1} />
      </group>
    </group>
  );
}

useGLTF.preload('/playstation.glb');

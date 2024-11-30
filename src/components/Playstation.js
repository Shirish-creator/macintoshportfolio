import React, { useRef,useState } from 'react';
import { useGLTF,Html } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import { useThree } from 'react-three-fiber';
import gsap from 'gsap';
import * as THREE from 'three';
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import { useControls } from 'leva';


export function Playstation({setActiveGame,gameActive,PlaystationActivation, orbitControlsActive, standardCameraPosition, standardCameraRotation, handleUiControlsToggle}) {
  const { nodes, materials } = useGLTF('/playstation2.glb');
  const powerref = useRef();
  const [zoomactive, setZoomActive] = useState(false);
  const { camera } = useThree();
  const audioref=useRef();
  const [isFrameActive, setIsFrameActive] = useState(false);
  const [indicatorMaterial, setGreenEmissiveMaterial] = useState(materials.phong1);
  // const [audioPlayed, setAudioPlayed] = useState(false);
  const [hovered, hover] = useState(null)
  const [discHovered, dischover] = useState(null)
  const [activeGameName, setActiveGameName]=useState("Tekken 3")

  

  const discs = [
    { id: 1, position: [-5.8, -5.7, -3.6], rotation: [1.55, -0.5, 0],material:materials['DeathtrapDungeon.001'],discName:"Tekken 3",gameLink:"https://retrogamesonline.io/play/tekken-3" },
    { id: 2, position: [-5.5, -4.4, -3.6], rotation: [1.55, -0.1, 0],material:materials['DeathtrapDungeon.002'], discName:"Crash Bandicoot",gameLink:"https://retrogamesonline.io/play/crash-bandicoot" },
    { id: 3, position: [-6.8, -4, -3.6], rotation: [1.55, 0.3, 0],material:materials['DeathtrapDungeon.003'], discName:"Grand Turismo",gameLink:"          https://retrogamesonline.io/play/gran-turismo" }

  ];
  const gameHandleClick = (id) => {
    const clickedDisc = discs.find(disc => disc.id === id);
    if (clickedDisc) {
      setActiveGame(clickedDisc.gameLink);
      setActiveGameName(clickedDisc.discName)
    }
  };

  const handleButtonClick = () => {
    const sound = new Audio('/whoosh.mp3'); // Replace 'path_to_your_sound_clip.mp3' with the actual path to your sound clip
  sound.play();
    setZoomActive(!zoomactive);
    handleUiControlsToggle();

    // Define the target camera position based on the zoomactive state
    const targetPosition = { x: zoomactive ?0:-11.5, y:zoomactive ? standardCameraPosition.y:-2, z: zoomactive ? standardCameraPosition.z : 15 };
    const targetRotation = { x:zoomactive?standardCameraRotation.x: -.5, y:zoomactive ?standardCameraRotation.y:0, z: 0 };

    // Tween the camera position
    gsap.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: 1.5, // Duration of the animation in seconds
      ease: "power2.out" // Easing function
    });
    // if(zoomactive){
    // camera.lookAt(groupRef.current.position)}
    gsap.to(camera.rotation, {
      x: targetRotation.x,
      y: targetRotation.y,
      z: targetRotation.z,
      duration: 1.5, // Duration of the animation in seconds
      ease: "power2.out" // Easing function
    });
  //  Toggle the state to activate/deactivate useFrame
  };
  // Update lidRef position in every frame
  useFrame(() => {
   
//   // Initialize the PlayStation intro sound
//   if (isFrameActive && !audioPlayed) {
//     // If frame is active and audio hasn't been played yet, play the audio
//     audioref.current.play();
//     setAudioPlayed(true); // Set audioPlayed state to true to indicate that audio has been played
// } else if (!isFrameActive && audioPlayed) {
//     // If frame is not active and audio has been played, pause the audio
//     audioref.current.pause();
//     audioref.current.currentTime = 0; // Reset audio to the beginning
//     setAudioPlayed(false); // Reset audioPlayed state to false
// }

    if (isFrameActive) {
        // If frame is active, update mesh position and set emissive material
        // powerref.current.position.y = -2; // Example: Increment y position by -2 units in each frame

        gsap.to(powerref.current.position, {
          y: -1,
          
          duration: 2, // Duration of the animation in seconds
          ease: "Elastic.easeOut" // Easing function
        });
        setGreenEmissiveMaterial(new THREE.MeshStandardMaterial({
            color: 0x00ff00, // Green color
emissive:0x00ff00,
emissiveIntensity:3,
            side: THREE.DoubleSide, // Render the material on both sides of the geometry
            // Add any other material properties you need
            
        }));


    } else {
    
        // If frame is not active, update mesh position and set initial material
        // powerref.current.position.y = 2; // Example: Increment y position by 2 units in each frame
        gsap.to(powerref.current.position, {
          y: 2,
          
          duration: 2, // Duration of the animation in seconds
          ease: "Elastic.easeOut" // Easing function
        })
        setGreenEmissiveMaterial(materials.phong1);

    }
});




const powerButton = () => {
  if (zoomactive) {
    // Toggle the frame activity state
    // setIsFrameActive((prevState) => {
    //   const newFrameState = !prevState;

    //   // Activate PlayStation functionality immediately after state update
    //   if (newFrameState) {
        
    //   }

    //   return newFrameState;
    // });
    setIsFrameActive(!isFrameActive);
    setTimeout(() => {
      PlaystationActivation();
    }, 750); // Slight delay to match the visual effect

    setZoomActive(!zoomactive);

    handleUiControlsToggle();

    // Play the power button sound
    const sound = new Audio('/powerclickbutton.mp3');
    sound.play();

    // Adjust camera zoom based on the frame state
    const targetPosition = { x: 0, y: standardCameraPosition.y, z: standardCameraPosition.z };
    const targetRotation = { x: standardCameraRotation.x, y: standardCameraRotation.y, z: 0 };

    // Animate camera movement
    gsap.to(camera.position, {
      ...targetPosition,
      duration: 1.5,
      ease: 'power2.out',
    });

    gsap.to(camera.rotation, {
      ...targetRotation,
      duration: 1.5,
      ease: 'power2.out',
    });
  }
};


  return (
    <group  dispose={null}>
      {!orbitControlsActive &&
      <Html
              occlude
              position={[-12, -4.8, 7.5]}
              rotation={[0,0.5,0]}
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
         
           <>
    {discs.map((disc) => (
      <Select key={disc.id} enabled={discHovered === disc.id}>
        <mesh
onClick={() => gameHandleClick(disc.id)}          
onPointerOver={() => dischover(disc.id)}
          onPointerOut={() => dischover(null)}
          castShadow
          geometry={nodes.Object_7.geometry}
          material={disc.material}
          position={disc.position}
          rotation={disc.rotation}
        />
      </Select>
    ))}
  </>
          <Html 
          castShadow
  position={[-7, -7.4, -3.65]}
  scale={0.3}
transform
occlude
rotation={[ 0, 0, .58]}
>
  <div style={{maxWidth:'620px',textAlign:"left"}} className='flex flex-col gap-4'>
 <p style={{color:"white",fontFamily:"NexaLight",fontSize:"16px"}} className='flex flex-row gap-2'>Press <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
</svg>
</span>  to play</p>
<p style={{color:"white", fontFamily:"NexaLight",maxWidth:"120px"}} className='flex flex-row gap-2'>  Active Game:
<span style={{fontWeight:"500",fontFamily:"NexaBold"}}>{activeGameName}</span>
</p>
</div>
</Html>
        </group>
      </group>   
      <group scale={0.01} position={[-12, -6.7, 7.5]} rotation={[0, -1, 0]}>
        
        <mesh castShadow   geometry={nodes.MainBody_LP_1_phong1_0.geometry} material={materials.phong1} />
        <mesh castShadow     geometry={nodes.MainBody_LP_2_phong1_0.geometry} material={materials.phong1} >
        

        
        </mesh>
        <mesh castShadow    geometry={nodes.MainBody_LP_3_phong1_0.geometry} material={materials.phong1} position={[1.655, 0, 0]} >
        <group>
         
            <Select enabled={hovered}>
              <mesh
                castShadow
                ref={powerref}
                onClick={powerButton}
                geometry={nodes.powerbutton.geometry}
                material={materials.phong1}
                onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}

              >
               
                <Html
                //  position={[2,12,0]}
                 position={[100, 40, 165]}
                 rotation={[5.7,1.5,0]}
                 style={{ userSelect: "none", WebkitUserSelect: "none" ,transformStyle: "preserve-3d"}}

          >
            <div className="blinkbtn" style={{width:'28px', pointerEvents:'none',height:'28px',borderRadius:'999px',background:" #ffffff40",display:'flex', padding:'9px'}}><div style={{height:'100%',width:'100%',background:'white',borderRadius:'99px'}}></div> </div>
          </Html>
                 
              </mesh>
            </Select>
            
            
</group>


        
         

         <mesh castShadow receiveShadow geometry={nodes.cable.geometry} material={materials.Lightplastic} position={[-200, -15, -75]} rotation={[0,0,-0.03]} scale={5} />

        {/* original bootup sound
        <Html>
        <audio ref={audioref} >
        <source src="/PlayStationIntro.mp3" type="audio/mpeg" />
        </audio>
        </Html> */}
       
        <mesh castShadow receiveShadow geometry={nodes.lightindicator.geometry} material={indicatorMaterial} />

        </mesh>
        
        <mesh castShadow  receiveShadow geometry={nodes.MainBody_LP_4_phong1_0.geometry} material={materials.phong1} />
        <mesh castShadow  receiveShadow geometry={nodes.MainBody_LP_5_phong1_0.geometry} material={materials.phong1} />
      </group>
    </group>
  );
}

useGLTF.preload('/playstation2.glb');

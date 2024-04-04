import React from 'react';
import { useGLTF, useTexture,Html } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from "react-three-fiber";
import { useRef,useState,useEffect } from 'react';
import * as TWEEN from '@tweenjs/tween.js'
import { TransformControls } from '@react-three/drei';

const Keyboard = () => {
  
   
    const { nodes } = useGLTF('/MacintoshCell.glb');
     const bakedKeyboard=useTexture('/Keyboardfinebaked.jpg')
 

  
    return (
      <>
      <group scale={.35} rotation={[1.55,0,0]} position={[-.5,-6.3,12]}>
      <mesh  geometry={nodes.Keyboard.children[0].geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh  geometry={nodes.Keyboard.children[1].geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>

      </mesh>

      <group position={[0,.2,-2]} rotation={[12.75,0,0]}>
      <mesh position={[-7.3,0,0]}  geometry={nodes.KeyA.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-5.2,0,0]}  geometry={nodes.keyS.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-3,0,0]}  geometry={nodes.keyD.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-1,0,0]}  geometry={nodes.keyF.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[1,0,0]}  geometry={nodes.keyG.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[3,0,0]}  geometry={nodes.keyH.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[5,0,0]}  geometry={nodes.keyJ.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[7,0,0]}  geometry={nodes.keyK.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[9.3,0,0]}  geometry={nodes.keyL.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[11.5,0,0]}  geometry={nodes.keyen.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[13.5,0,0]}  geometry={nodes.keya.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[3,-13,6]} rotation={[-.1,0,0]} geometry={nodes.Keyboardchord.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[16.3,-4.3,0]}  geometry={nodes.Backspace.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-11.1,-4.3,0]}  geometry={nodes.keybacktick.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-9.1,-4.3,0]}  geometry={nodes.keyone.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-7.1,-4.3,0]}  geometry={nodes.keytwo.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-5,-4.3,0]}  geometry={nodes.keythree.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-3.1,-4.3,0]}  geometry={nodes.keyfour.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-1.1,-4.3,0]}  geometry={nodes.keyfive.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[1.1,-4.3,0]}  geometry={nodes.keysix.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[3.1,-4.3,0]}  geometry={nodes.keyseven.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[5.1,-4.3,0]}  geometry={nodes.keyeight.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[7.1,-4.3,0]}  geometry={nodes.keynine.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[9.1,-4.3,0]}  geometry={nodes.keye.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[11.1,-4.3,0]}  geometry={nodes.keyc.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[13.4,-4.3,0]}  geometry={nodes.keyb.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      {/* <mesh position={[3.1,-4.3,0]}  geometry={nodes.keysix.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh> */}
      <mesh position={[-10.2,0.2,0]}  geometry={nodes.CapLock.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[16.3,0,0]}  geometry={nodes.keyReturn.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[3,4.6,0]}  geometry={nodes.keySpace.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[12,4.6,0]}  geometry={nodes.Enter.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[14.5,4.6,0]}  geometry={nodes.keyOption.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-10.6,-2.1,0]}  geometry={nodes.keyTab.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-8,-2.1,0]}  geometry={nodes.keyQ.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-6,-2.1,0]}  geometry={nodes.keyW.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-4,-2.1,0]}  geometry={nodes.keyE.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-2,-2.1,0]}  geometry={nodes.keyR.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[0.2,-2.1,0]}  geometry={nodes.keyT.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[2.5,-2.1,0]}  geometry={nodes.keyY.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[4.5,-2.1,0]}  geometry={nodes.keyU.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[6.5,-2.1,0]}  geometry={nodes.keyI.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[8.5,-2.1,0]}  geometry={nodes.keyO.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[10.5,-2.1,0]}  geometry={nodes.keyP.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[12.5,-2.1,0]}  geometry={nodes.keyleftbbracket.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[14.5,-2.1,0]}  geometry={nodes.keylrightbbracket.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[16.5,-2.1,0]}  geometry={nodes.keyd.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-9.7,2.4,0]}  geometry={nodes.keyLShift.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-8.8,4.5,0]}  geometry={nodes.keyctrl.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-6.2,4.4,0]}  geometry={nodes.keyStart.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[2,2.3,0]}  geometry={nodes.KeyB.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-6.2,2.3,0]}  geometry={nodes.keyZ.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-4,2.3,0]}  geometry={nodes.keyX.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-2,2.3,0]}  geometry={nodes.KeyC.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[-0,2.3,0]}  geometry={nodes.keyV.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[4,2.3,0]}  geometry={nodes.keyN.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[6,2.3,0]}  geometry={nodes.keyM.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[8,2.3,0]}  geometry={nodes.keylessthan.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[10,2.3,0]}  geometry={nodes.keygreaterthan.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      </mesh>
      <mesh position={[12,2.3,0]}  geometry={nodes.keywhat.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      
      </mesh>
      <mesh position={[15.5,2.3,0]}  geometry={nodes.keyShift.geometry} >
      <meshStandardMaterial map={bakedKeyboard} map-flipY={false} ></meshStandardMaterial>
      
      </mesh>
      </group>
      
      </group>
    
      </>
    );
  };
  
  useGLTF.preload('/MacintoshCell.glb');
  
  export default Keyboard;
  
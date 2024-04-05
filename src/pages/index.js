import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Threed from "@/components/threedworld";
import { useState,useRef,useEffect } from "react";
import { useFrame } from "react-three-fiber";
import Uicontrols from "@/components/Uicontrols";



export default function Home() {
  const [orbitControlsActive, setOrbitControlsActive] = useState(false);
  const [showUiControls, setUiControls] = useState(true);

  const handleOrbitControlsToggle = () => {
    setOrbitControlsActive(!orbitControlsActive);
  };

  const handleUiControlsToggle=()=>{
    setUiControls(!showUiControls)
  }

  return (
    <>
    <Head>
    <title>SHIRISH's Macintosh</title>
    </Head>
    
    <section className="w-full h-screen flex   relative">
    {/* {showUiControls && <Uicontrols orbitControlsActive={orbitControlsActive} handleOrbitControlsToggle={handleOrbitControlsToggle} />} */}
     <Uicontrols showUiControls={showUiControls} orbitControlsActive={orbitControlsActive} handleOrbitControlsToggle={handleOrbitControlsToggle} />

    <Threed showUiControls={showUiControls} handleUiControlsToggle={handleUiControlsToggle} orbitControlsActive={orbitControlsActive} handleOrbitControlsToggle={handleOrbitControlsToggle} />
    </section>
    
    
    
    </>
  );
}

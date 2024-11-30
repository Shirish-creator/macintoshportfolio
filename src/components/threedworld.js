import { Canvas } from "react-three-fiber";
import React, { useRef, useEffect } from "react";
import { Suspense } from "react";
import * as Three from "three";
import Stats from "stats.js";
import { NodeToyTick } from "@nodetoy/react-nodetoy";
import LoadingScreen from "./Loader";
import Scene from "./Scene";
import { useFrame } from "react-three-fiber";

function StatsUpdater({ statsRef }) {
  useFrame(() => {
    statsRef.current?.begin();
    statsRef.current?.end();
  });
  return null;
}

export default function Threed({
  handleCameraStart,
  cameraStart,
  orbitControlsActive,
  handleOrbitControlsToggle,
  handleUiControlsToggle,
  showUiControls,
  handleSetLoadedScreen,
}) {
  const canvasRef = useRef(null); // Ref for the canvas
  const statsRef = useRef(null); // Ref for the Stats instance

  useEffect(() => {
    // Initialize Stats
    const stats = new Stats();
    stats.showPanel(0); // Show FPS panel
    statsRef.current = stats;

    // Append Stats to the canvas container
    if (canvasRef.current) {
      canvasRef.current.appendChild(stats.dom);
    }

    return () => {
      // Clean up Stats DOM element
      if (canvasRef.current) {
        canvasRef.current.removeChild(stats.dom);
      }
    };
  }, []);

  return (
    <>
      <LoadingScreen
        handleCameraStart={handleCameraStart}
        handleSetLoadedScreen={handleSetLoadedScreen}
      />

      <div ref={canvasRef} style={{ height: "100vh", width: "100vw" }}>
        <Canvas
          gl={{
            antialias: true,
          }}
          shadows
          camera={{
            fov: 110,
            near: 0.5,
            far: 1000,
            position: [0, 1, 22],
          }}
        >
          <color args={["#000000"]} attach="background" />
          <NodeToyTick />
          <Suspense>
            <Scene
              cameraStart={cameraStart}
              orbitControlsActive={orbitControlsActive}
              handleUiControlsToggle={handleUiControlsToggle}
              showUiControls={showUiControls}
              handleCameraStart={handleCameraStart}
              handleOrbitControlsToggle={handleOrbitControlsToggle}
            />
          </Suspense>
          {/* Add StatsUpdater inside the Canvas */}
          <StatsUpdater statsRef={statsRef} />
        </Canvas>
      </div>
    </>
  );
}

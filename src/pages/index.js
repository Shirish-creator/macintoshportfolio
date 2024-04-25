import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Threed from "@/components/threedworld";
import { useState,useRef,useEffect } from "react";
import { useFrame } from "react-three-fiber";
import Uicontrols from "@/components/Uicontrols";
import LoadingScreen from "@/components/Loader";
import Script from "next/script";



export default function Home() {
  const [orbitControlsActive, setOrbitControlsActive] = useState(false);
  const [showUiControls, setUiControls] = useState(true);
  const [loadedScreen, setLoadedScreen] = useState(false);
  const [showSvgAndImage, setShowSvgAndImage] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // State to control music
  const [audioElement, setAudioElement] = useState(null); // State to control the audio element
const [musicButtonLabel,setMusicButtonLabel]=useState(false)
const [cameraStart,setCameraStart]=useState(false)

  
  const handleOrbitControlsToggle = () => {
    setOrbitControlsActive(!orbitControlsActive);
  };

  const handleUiControlsToggle=()=>{
    setUiControls(!showUiControls)
  }

  const handleCameraStart=()=>{
    setCameraStart(true)
  }
  // Define the function to pass
  const handleSetLoadedScreen = () => {
    setLoadedScreen(true);
    setIsMusicPlaying(true); // Start playing music
  };
  const togglePlayPause = () => {
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
        setMusicButtonLabel(false)

      } else {
        audioElement.pause();
        setMusicButtonLabel(true)

      }
    }
  };

  useEffect(() => {
    let timeout;
    if (orbitControlsActive) {
      setShowSvgAndImage(true);
      timeout = setTimeout(() => {
        setShowSvgAndImage(false);
      }, 3000); // 3 seconds
    } else {
      clearTimeout(timeout);
      setShowSvgAndImage(false);
    }
    return () => clearTimeout(timeout);
  }, [orbitControlsActive]);

  return (
    <>
    <Head>
    <title>SHIRISH's Macintosh</title>
    <script>
          {`
           (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:4958080,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </script>
    </Head>
    {isMusicPlaying && (
        <audio ref={(element) => setAudioElement(element)} autoPlay loop>
        <source src="/spacesound.mp3" type="audio/mpeg" />
        </audio>
      )}
    <section className="w-full h-screen flex   relative" style={{ cursor: orbitControlsActive ? 'grab' : 'default' }}>
     <Uicontrols togglePlayPause={togglePlayPause} musicButtonLabel={musicButtonLabel} showUiControls={showUiControls} orbitControlsActive={orbitControlsActive} handleOrbitControlsToggle={handleOrbitControlsToggle} />
   
     {orbitControlsActive && showSvgAndImage && 
     <><svg
     style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',zIndex:10,height:"80px",widt:'80px' }}
     width={150}
     height={150}
     viewBox="0 0 150 150"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
   >
     <g clipPath="url(#clip0_3878_653)">
       <path
         d="M108.746 26.6944L102.76 25.2205L96.788 23.7618L102.577 19.0818L108.366 14.3866L108.549 20.5405L108.746 26.6944Z"
         fill="#403E3E"
       />
       <path
         d="M41.251 124.549C36.8141 118.532 33.5169 111.679 31.0401 104.552C28.5937 97.3957 27.0287 89.9198 26.3145 82.3528C24.871 67.2188 26.5728 51.6138 32.1189 37.0876C34.9452 29.8701 38.7742 22.9109 43.9101 16.8026C49.0611 10.7702 55.6556 5.48246 63.6329 2.85377C71.5342 0.0883158 80.5447 0.51377 88.1573 3.71987C95.8003 6.95636 101.985 12.4721 106.634 18.7627C107.652 20.1302 107.348 22.06 105.981 23.078C104.689 24.0201 102.927 23.8378 101.863 22.683L101.833 22.6526C97.1222 17.4408 91.5913 13.0799 85.3614 10.8006C82.2617 9.66103 79.0404 9.00765 75.8039 9.00765C72.5674 8.96207 69.3309 9.46349 66.2616 10.5727C60.1077 12.7456 54.5464 16.8785 50.064 22.1207C45.5359 27.3174 41.874 33.4257 39.1389 39.9746C36.3279 46.4932 34.3222 53.422 33.0762 60.5028C31.7391 67.5835 31.268 74.8314 31.344 82.0945C31.4959 89.3576 32.2557 96.6359 33.8967 103.777C35.477 110.934 37.8929 117.939 41.251 124.594V124.549Z"
         fill="#403E3E"
       />
       <path
         d="M119.109 53.3612C123.455 65.9425 124.67 79.6938 123.105 93.1563C122.361 99.9028 120.826 106.604 118.486 113.077C117.316 116.313 115.933 119.474 114.338 122.558C112.712 125.628 110.873 128.591 108.807 131.417C104.644 137.039 99.4166 142.084 93.05 145.563C86.7441 149.058 79.1923 150.729 72.0052 149.696C68.4192 149.21 64.9244 148.192 61.7487 146.627C58.573 145.062 55.6556 143.086 53.0573 140.822C47.9367 136.188 43.986 130.581 41.2206 124.549C45.4143 129.685 50.0032 134.41 55.3365 137.875C60.6091 141.385 66.5655 143.542 72.537 143.801C75.5152 143.907 78.4934 143.573 81.3348 142.813C84.1762 142.023 86.9265 140.853 89.4792 139.303C94.5998 136.234 99.0367 131.873 102.699 126.889C110.083 116.906 114.627 104.75 117.255 92.2446C119.793 79.6634 120.355 66.5807 119.094 53.3764L119.109 53.3612Z"
         fill="#403E3E"
       />
       <path
         d="M124.306 109.597L125.78 103.626L127.238 97.6388L131.918 103.428L136.613 109.217L130.46 109.415L124.306 109.597Z"
         fill="#403E3E"
       />
       <path
         d="M26.4513 42.1018C32.4685 37.6649 39.3213 34.3677 46.4477 31.8909C53.6044 29.4446 61.0803 27.8795 68.6473 27.1654C83.7813 25.7219 99.3863 27.4237 113.912 32.9698C121.13 35.796 128.089 39.6251 134.198 44.7609C140.23 49.9119 145.518 56.5065 148.146 64.4837C150.912 72.385 150.486 81.3955 147.28 89.0081C144.044 96.6511 138.528 102.835 132.237 107.485C130.87 108.503 128.94 108.199 127.922 106.832C126.98 105.54 127.162 103.777 128.317 102.714L128.348 102.683C133.559 97.973 137.92 92.4269 140.199 86.1971C141.339 83.0973 141.992 79.876 141.992 76.6396C142.038 73.4031 141.537 70.1666 140.427 67.0972C138.255 60.9433 134.122 55.3821 128.879 50.8996C123.683 46.3716 117.574 42.7096 111.025 39.9746C104.507 37.1635 97.5781 35.1578 90.4973 33.9118C83.4166 32.5747 76.1687 32.1037 68.9056 32.1796C61.6425 32.3316 54.3642 33.0913 47.2226 34.7324C40.0659 36.3126 33.0611 38.7286 26.4058 42.0866L26.4513 42.1018Z"
         fill="#403E3E"
       />
       <path
         d="M97.6388 119.975C85.0576 124.321 71.3063 125.536 57.8437 123.971C51.0972 123.227 44.3963 121.692 37.9234 119.352C34.6869 118.182 31.5264 116.799 28.4418 115.204C25.3725 113.578 22.4095 111.74 19.5833 109.673C13.9612 105.51 8.91654 100.283 5.43693 93.9161C1.94214 87.6102 0.27071 80.0584 1.30395 72.8713C1.79019 69.2853 2.80824 65.7905 4.3733 62.6148C5.93836 59.4391 7.91368 56.5217 10.1777 53.9234C14.8121 48.8028 20.419 44.8521 26.4513 42.0867C21.3155 46.2804 16.5899 50.8693 13.1255 56.2026C9.6155 61.4752 7.45784 67.4316 7.19953 73.4031C7.09317 76.3965 7.42745 79.3595 8.18719 82.2009C8.97732 85.0423 10.1473 87.7926 11.6972 90.3453C14.7665 95.4659 19.1274 99.9028 24.1113 103.565C34.0943 110.949 46.2501 115.493 58.7554 118.121C71.3367 120.659 84.4194 121.221 97.6237 119.96L97.6388 119.975Z"
         fill="#403E3E"
       />
     </g>
     <defs>
       <clipPath id="clip0_3878_653">
         <rect width={149} height={149} fill="white" transform="translate(1 1)" />
       </clipPath>
     </defs>
   </svg>
   <img style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',zIndex:10,height:"90px" }} src="/gesture.gif"></img>
<span  style={{fontFamily:"NexaLight", position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)',zIndex:10,height:"80px",widt:'80px',color:"white" }}>
  Drag to view
</span>
   </>
      }
    <Threed handleCameraStart={handleCameraStart} cameraStart={cameraStart } handleSetLoadedScreen={handleSetLoadedScreen} showUiControls={showUiControls} handleUiControlsToggle={handleUiControlsToggle} orbitControlsActive={orbitControlsActive} handleOrbitControlsToggle={handleOrbitControlsToggle} />
    </section>
    <span  style={{fontFamily:"NexaLight",fontSize:'6px', position: 'absolute', bottom: '2%', left: '50%', transform: 'translateX(-50%)',textAlign:'center',zIndex:10,width:'90%',color:"white" }}>
  Apple Logo is a trademark of Apple Inc. Macintosh logo is a trademark of Apple Inc. Tekken is a trademark of Bandai.co. Playstation logo is a trademark of Sony Computer Entertainment Inc.Crash Bandicoot is a trademark of Naughty Dog, LLC. Gran Turismo logo is a trademark of Polyphony Digital
</span>
    
    
    
    </>
  );
}

import React, { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

export default function LoadingScreen({handleSetLoadedScreen}) {
    const { progress } = useProgress()
    const [currentProgress, setCurrentProgress] = useState(0);
    const [fullyLoaded, setFullyLoaded] = useState(false);
    const [loadedScreen, setLoadedScreen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (progress === 100) {
            setLoadedScreen(true)
        }
        setCurrentProgress(progress); // Update current progress
    }, [progress])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsDesktop(window.innerWidth > 550);
        }
        function handleResize() {
            if (typeof window !== 'undefined') {
                setIsDesktop(window.innerWidth > 550);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const fullyLoad = () => {
        setFullyLoaded(true);
        handleSetLoadedScreen();
    }

    // Conditionally render the loading screen only on the client side

    return (
        <>
            <div className={`LoaderScreen bg-slate-900
            ${fullyLoaded ? 'LoaderScreen-active' : 'LoaderScreen-inactive'}
             flex fixed justify-center items-center  flex-col`} >
                {isDesktop ? 
                    <div className='desktopContent flex justify-center gap-6 flex-col items-center'>
                        <div className='flex flex-row gap-2'>LOADED {currentProgress.toFixed(0)} %</div>
                        <button onClick={fullyLoad} className={`loadbutton ${loadedScreen ? 'loadbutton-active':'loadbutton-inactive'}`}>START</button>
                    </div>
                :
                <>
                <svg
  width={120}
  height={120}
  viewBox="0 0 32 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_3883_653)">
    <path d="M8 8H2V24H8" stroke="white" />
    <path d="M25 24L31 24L31 8L25 8" stroke="white" />
    <path
      d="M6.69121 20.3881C6.64328 20.5176 6.70941 20.6614 6.83889 20.7093L8.94901 21.4903C9.0785 21.5382 9.22232 21.4721 9.27024 21.3426C9.31817 21.2131 9.25205 21.0693 9.12256 21.0214L7.2469 20.3272L7.94108 18.4515C7.989 18.322 7.92288 18.1782 7.7934 18.1303C7.66391 18.0824 7.52009 18.1485 7.47217 18.278L6.69121 20.3881ZM25.2502 12.2448C25.2981 12.1153 25.232 11.9715 25.1025 11.9236L22.9924 11.1426C22.8629 11.0947 22.7191 11.1608 22.6712 11.2903C22.6232 11.4198 22.6894 11.5636 22.8188 11.6115L24.6945 12.3057L24.0003 14.1814C23.9524 14.3109 24.0185 14.4547 24.148 14.5026C24.2775 14.5505 24.4213 14.4844 24.4692 14.3549L25.2502 12.2448ZM7.03009 20.702L25.1202 12.3852L24.9113 11.9309L6.82124 20.2477L7.03009 20.702Z"
      fill="white"
    />
  </g>
  <defs>
    <clipPath id="clip0_3883_653">
      <rect width={32} height={32} fill="white" />
    </clipPath>
  </defs>
</svg>
                <div className=' flex justify-center gap-6 flex-col items-center'>
                        <div className='flex flex-row gap-2' style={{textAlign:"center",fontSize:"18px",fontFamily:"NexaLight"}}>Looks like you're on a small device, please view on a larger device for best experience</div>
                        <span style={{textAlign:"center",fontSize:"18px",fontFamily:"NexaLight"}}>or, check out</span>
                        <a href='https://www.shirishshakya.com' style={{textAlign:"center",fontWeight:600,color:"#FB722E",fontSize:"18px",fontFamily:"NexaLight",textDecoration:"underline"}}>www.shirishshakya.com</a>
                        

                    </div>
                    </>
                }
            </div>
            
        </>
    )
}

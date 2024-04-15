import React, { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

export default function LoadingScreen({ handleSetLoadedScreen, handleCameraStart }) {
    const { progress } = useProgress()
    const [currentProgress, setCurrentProgress] = useState(0);
    const [fullyLoaded, setFullyLoaded] = useState(false);
    const [loadedScreen, setLoadedScreen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (progress === 100) {
            setLoadedScreen(true);
        }
        // Update current progress if the new progress is greater than the current progress
        if (progress > currentProgress) {
            setCurrentProgress(progress);
        }
    }, [progress, currentProgress])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsDesktop(window.innerWidth > 650);
        }
        function handleResize() {
            if (typeof window !== 'undefined') {
                setIsDesktop(window.innerWidth > 650);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const fullyLoad = () => {
        setFullyLoaded(true);
        handleSetLoadedScreen();
        handleCameraStart();
    }

    // Conditionally render the loading screen only on the client side

    return (
        <>
            <div className={`LoaderScreen
            ${fullyLoaded ? 'LoaderScreen-active' : 'LoaderScreen-inactive'}
             flex fixed justify-center items-center  flex-col`} >
                {isDesktop ?
                    <div className='desktopContent flex justify-center gap-2 flex-col items-center'>
                        <div className='flex flex-row ' style={{ fontSize: "224px" }}> {currentProgress.toFixed(0)} <span>%</span></div>
                        <button onClick={fullyLoad} className={`loadbutton ${loadedScreen ? 'loadbutton-active' : 'loadbutton-inactive'}`}>START EXPERIENCE</button>
                    </div>
                    :
                    <>
                        <div className=' flex justify-center gap-6 flex-col items-center' style={{ maxWidth: '340px' }}>
                            <svg
                                width={211}
                                height={69}
                                viewBox="0 0 211 69"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* SVG content */}
                            </svg>

                            <div className='flex flex-row gap-2' style={{ textAlign: "center", fontSize: "18px", fontFamily: "NexaLight" }}>Looks like you're on a small device, please view on a larger device for best experience</div>
                            <span style={{ textAlign: "center", fontSize: "18px", fontFamily: "NexaLight" }}>or, check out</span>
                            <a href='https://www.shirishshakya.com' style={{ textAlign: "center", fontWeight: 600, color: "#FB722E", fontSize: "18px", fontFamily: "NexaLight", textDecoration: "underline" }}>www.shirishshakya.com</a>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

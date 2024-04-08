import React, { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

export default function LoadingScreen({handleSetLoadedScreen}) {
    const { progress } = useProgress()
    const [currentProgress, setCurrentProgress] = useState(0);
    const [fullyLoaded, setfullyLoaded] = useState(false);
    const [loadedScreen,setLoadedScreen]=useState(false)


    useEffect(() => {
        if (progress === 100) {
            setLoadedScreen(true)
        }
        setCurrentProgress(progress); // Update current progress

       
    }, [progress])
    const fullyload=()=>{
        // const sound = new Audio('/slow-whoosh.mp3'); // Replace 'path_to_your_sound_clip.mp3' with the actual path to your sound clip
        // sound.play();
        setfullyLoaded(true)
        handleSetLoadedScreen();

    }

    // Conditionally render the loading screen only on the client side

    return (
        <section>
            <div className={`LoaderScreen 
            ${fullyLoaded ? 'LoaderScreen-active' : 'LoaderScreen-inactive'}
             flex fixed justify-center items-center gap-6 flex-col`} >
                <div className='flex flex-row gap-2'>LOADED {currentProgress.toFixed(0)} %</div>
                
                <button onClick={fullyload} className={`loadbutton ${loadedScreen ? 'loadbutton-active':'loadbutton-inactive'}`}>START</button>
            </div>
            
        </section>
    )
}

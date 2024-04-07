import React, { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

export default function LoadingScreen() {
    const { progress } = useProgress()
    const [loadedScreen, setLoadedScreen] = useState(false);
    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
        if (progress === 100) {
            setLoadedScreen(true)
        }
        setCurrentProgress(progress); // Update current progress
    }, [progress])

    // Conditionally render the loading screen only on the client side

    return (
        <section>
            <div className={`LoaderScreen 
            ${loadedScreen ? 'LoaderScreen-active' : 'LoaderScreen-inactive'}
             flex fixed justify-center items-center flex-row`} >
                LOADING {currentProgress.toFixed(0)} %
            </div>
        </section>
    )
}

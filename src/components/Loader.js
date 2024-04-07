import React, { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

export default function LoadingScreen() {
    const { progress } = useProgress()
    const [loadedScreen, setLoadedScreen] = useState(false);
const percent=progress.toFixed(0);

    useEffect(() => {
        if (progress === 100) {
            setLoadedScreen(true)
        }
    }, [progress])

    return (
        <section>
            <div className={`LoaderScreen 
            ${loadedScreen ? 'LoaderScreen-active' : 'LoaderScreen-inactive'}
             flex fixed justify-center items-center flex-row`} >
                LOADING  {percent} %
            </div>
        </section>
    )
}

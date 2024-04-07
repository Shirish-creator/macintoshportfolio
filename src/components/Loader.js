import React from 'react'
import { Html } from '@react-three/drei'
import { useProgress } from '@react-three/drei'


export default function Loader({ onLoaded }) {
    const { active, progress, errors, item, loaded, total } = useProgress()

  return (
    <Html center
    // style={{width:"100%",background:"white"}}
    >
        <section >
        <div className='flex justify-center items-center flex-row' style={{color:'white',fontFamily:"Monument Extended Bold",fontSize:"24px",width:"100%"}}>
        LOADED {progress.toFixed(0)} %</div>
        </section>
    </Html>

  )
}
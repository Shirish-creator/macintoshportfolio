import React from 'react'
import { Html } from '@react-three/drei'

export default function Loader() {
  return (
    <Html>
        <div className='flex justify-center items-center w-100 h-100'>
        <div className='spinner w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
    </div>
    </Html>
    
  )
}
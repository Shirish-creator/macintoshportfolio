import React from 'react'
import { useState,useEffect,useRef } from 'react'

export default function Uicontrols({orbitControlsActive,handleOrbitControlsToggle,showUiControls,musicButtonLabel,togglePlayPause}) {

    const [time, setTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
          const date = new Date();
          const torontoTime = date.toLocaleTimeString('en-US', { timeZone: 'America/Toronto' });
          setTime(torontoTime); 
        }, 1000);
    
        // timezone has been changed please add this
      
        return () => clearInterval(interval);
      }, []);
  return (
    <div className={`controlHeader-${showUiControls ? "active" : "inactive"} controlpanel fixed flex flex-col gap-2`}    >
        <div className='controlHeader flex flex-row justify-center items-center' style={{fontFamily:'var(--typography-font-family-serif)',fontStyle:"italic",fontSize:"var(--typography-size-2xl)"}}>Shirish Shakya</div>
        <div className='controlHeader flex flex-row justify-center items-center'>Product Designer/ Creative Developer/ Product Manager</div>
        <div className='controlHeader gap-2 flex flex-row items-center justify-center'>
        <span style={{width:'180px'}}>{time} <span>Local Time</span></span>
        <div className='flex flex-row BTN-GRP relative'>
        <button onClick={handleOrbitControlsToggle} className="BTNICON flex flex-row gap-2" >{orbitControlsActive?
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      className="bi bi-eye"
      viewBox="0 0 16 16"
      >
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
      </svg>
:
<svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      className="bi bi-eye-slash"
      viewBox="0 0 16 16"
      >
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
      </svg>

}</button>

<svg
  width={8}
  height={24}
  style={{left:"50%",top:"50%",transform:"translate(-50%,-50%)",zIndex:-1}}
  className='absolute joint'
  viewBox="0 0 8 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 0C3.0988 2.65796 4.85037 2.66092 8 0V24C4.96067 21.3589 3.18923 21.3449 0 24V0Z"
    fill="#292828"
  />
</svg>





<button onClick={togglePlayPause} className="BTNICON flex flex-row gap-2" >{musicButtonLabel?
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
  />
</svg>
:
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
  />
</svg>

}</button>
</div>
        </div>

      
      

      
    </div>
  )
}

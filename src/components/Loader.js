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
            <div className={`LoaderScreen
            ${fullyLoaded ? 'LoaderScreen-active' : 'LoaderScreen-inactive'}
             flex fixed justify-center items-center  flex-col`} >
                {isDesktop ? 
                    <div className='desktopContent flex justify-center gap-6 flex-col items-center'>
                        <div className='flex flex-row gap-2'>LOADED {currentProgress.toFixed(0)} %</div>
                        <button onClick={fullyLoad} className={`loadbutton ${loadedScreen ? 'loadbutton-active':'loadbutton-inactive'}`}>START</button>
                    </div>
                :
                <>
                
                <div className=' flex justify-center gap-6 flex-col items-center' style={{maxWidth:'340px'}}>
                <svg
  width={211}
  height={69}
  viewBox="0 0 211 69"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_3903_753)">
    <path
      d="M4.02202 14H18.9748C20.0811 14 21.0874 14.4671 21.8163 15.2212C22.5452 15.9753 22.9968 17.0163 22.9968 18.1607V50.8393C22.9968 51.9837 22.5452 53.0247 21.8163 53.7788C21.0874 54.5329 20.0811 55 18.9748 55H4.02202C2.91572 55 1.90941 54.5329 1.18048 53.7788C0.45155 53.0247 0 51.9837 0 50.8393V18.1607C0 17.0163 0.45155 15.9753 1.18048 15.2212C1.90941 14.4671 2.91572 14 4.02202 14ZM9.33095 51.7035C9.06325 51.7035 8.84715 51.4799 8.84715 51.203C8.84715 50.926 9.06325 50.7025 9.33095 50.7025H13.7561C14.0238 50.7025 14.2399 50.926 14.2399 51.203C14.2399 51.4799 14.0238 51.7035 13.7561 51.7035H9.33095ZM8.9181 16.389C9.34063 16.389 9.68574 16.746 9.68574 17.1831C9.68574 17.6202 9.34063 17.9772 8.9181 17.9772C8.49558 17.9772 8.15047 17.6202 8.15047 17.1831C8.15047 16.746 8.49558 16.389 8.9181 16.389ZM11.4984 16.389C11.9209 16.389 12.266 16.746 12.266 17.1831C12.266 17.6202 11.9209 17.9772 11.4984 17.9772C11.0726 17.9772 10.7308 17.6202 10.7308 17.1831C10.7308 16.746 11.0759 16.389 11.4984 16.389ZM14.0787 16.389C14.5012 16.389 14.8463 16.746 14.8463 17.1831C14.8463 17.6202 14.5012 17.9772 14.0787 17.9772C13.6529 17.9772 13.311 17.6202 13.311 17.1831C13.311 16.746 13.6562 16.389 14.0787 16.389ZM0.967606 47.129H22.0324V20.4096H0.967606V47.129ZM22.0324 48.13H0.967606V50.8393C0.967606 51.7068 1.31272 52.4976 1.86425 53.0715C2.41902 53.6453 3.18342 53.999 4.02202 53.999H18.9748C19.8134 53.999 20.5778 53.642 21.1325 53.0715C21.6873 52.4976 22.0292 51.7068 22.0292 50.8393V48.13H22.0324ZM0.967606 19.4086H22.0324V18.1607C22.0324 17.2932 21.6873 16.5024 21.1357 15.9285C20.581 15.3547 19.8166 15.001 18.9748 15.001H4.02202C3.18342 15.001 2.41902 15.3547 1.86425 15.9285C1.30949 16.5024 0.967606 17.2932 0.967606 18.1607V19.4086Z"
      fill="#FB722E"
    />
  </g>
  <path
    d="M62.3536 34.8536C62.5488 34.6583 62.5488 34.3417 62.3536 34.1464L59.1716 30.9645C58.9763 30.7692 58.6597 30.7692 58.4645 30.9645C58.2692 31.1597 58.2692 31.4763 58.4645 31.6716L61.2929 34.5L58.4645 37.3284C58.2692 37.5237 58.2692 37.8403 58.4645 38.0355C58.6597 38.2308 58.9763 38.2308 59.1716 38.0355L62.3536 34.8536ZM58 35L62 35L62 34L58 34L58 35Z"
    fill="#595959"
  />
  <path
    d="M74.3536 34.8536C74.5488 34.6583 74.5488 34.3417 74.3536 34.1464L71.1716 30.9645C70.9763 30.7692 70.6597 30.7692 70.4645 30.9645C70.2692 31.1597 70.2692 31.4763 70.4645 31.6716L73.2929 34.5L70.4645 37.3284C70.2692 37.5237 70.2692 37.8403 70.4645 38.0355C70.6597 38.2308 70.9763 38.2308 71.1716 38.0355L74.3536 34.8536ZM70 35L74 35L74 34L70 34L70 35Z"
    fill="#595959"
  />
  <path
    d="M86.3536 34.8536C86.5488 34.6583 86.5488 34.3417 86.3536 34.1464L83.1716 30.9645C82.9763 30.7692 82.6597 30.7692 82.4645 30.9645C82.2692 31.1597 82.2692 31.4763 82.4645 31.6716L85.2929 34.5L82.4645 37.3284C82.2692 37.5237 82.2692 37.8403 82.4645 38.0355C82.6597 38.2308 82.9763 38.2308 83.1716 38.0355L86.3536 34.8536ZM82 35L86 35L86 34L82 34L82 35Z"
    fill="#595959"
  />
  <g clipPath="url(#clip1_3903_753)">
    <path
      d="M128.5 56.0625C128.784 56.0625 129.057 55.9489 129.258 55.7467C129.459 55.5445 129.572 55.2703 129.572 54.9844V4.3125C129.572 3.02306 130.433 2.15625 131.714 2.15625H200.286C201.507 2.15625 202.429 3.16537 202.429 4.50441V54.9844C202.429 55.2703 202.542 55.5445 202.743 55.7467C202.943 55.9489 203.216 56.0625 203.5 56.0625C203.784 56.0625 204.057 55.9489 204.258 55.7467C204.459 55.5445 204.572 55.2703 204.572 54.9844V4.50441C204.572 1.97728 202.69 0 200.286 0H131.714C129.231 0 127.429 1.81341 127.429 4.3125V54.9844C127.429 55.2703 127.542 55.5445 127.743 55.7467C127.943 55.9489 128.216 56.0625 128.5 56.0625Z"
      fill="#FB722E"
    />
    <path
      d="M134.929 6.46875C134.644 6.46875 134.372 6.58234 134.171 6.78453C133.97 6.98671 133.857 7.26094 133.857 7.54688V54.9844C133.857 55.2703 133.97 55.5445 134.171 55.7467C134.372 55.9489 134.644 56.0625 134.929 56.0625H197.071C197.356 56.0625 197.628 55.9489 197.829 55.7467C198.03 55.5445 198.143 55.2703 198.143 54.9844V7.54688C198.143 7.26094 198.03 6.98671 197.829 6.78453C197.628 6.58234 197.356 6.46875 197.071 6.46875H134.929ZM196 53.9062H136V8.625H196V53.9062ZM209.929 60.375H122.071C121.787 60.375 121.515 60.4886 121.314 60.6908C121.113 60.893 121 61.1672 121 61.4531V63.9867C121 66.5699 124.017 69 126.357 69H205.643C208.096 69 211 66.0783 211 63.6094V61.4531C211 61.1672 210.887 60.893 210.686 60.6908C210.485 60.4886 210.213 60.375 209.929 60.375ZM208.857 63.6094C208.857 64.8794 206.905 66.8438 205.643 66.8438H126.357C125.005 66.8438 123.143 65.1877 123.143 63.9867V62.5312H208.857V63.6094Z"
      fill="#FB722E"
    />
  </g>
  <defs>
    <clipPath id="clip0_3903_753">
      <rect width={23} height={41} fill="white" transform="translate(0 14)" />
    </clipPath>
    <clipPath id="clip1_3903_753">
      <rect width={90} height={69} fill="white" transform="translate(121)" />
    </clipPath>
  </defs>
</svg>

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

import "@/styles/globals.css";
import "@/styles/style.scss"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";


export default function App({ Component, pageProps }) {
  return (
  <>
   <Analytics/>

  <Component {...pageProps} />
  </>
 )
  
}

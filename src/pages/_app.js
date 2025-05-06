import "@/styles/globals.css";
import "@/styles/style.scss"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
import "@shirishcreates/skeumorphism-ds/styles.css";

export default function App({ Component, pageProps }) {
  return (
  <>
   <Analytics/>

  <Component {...pageProps} />
  </>
 )
  
}

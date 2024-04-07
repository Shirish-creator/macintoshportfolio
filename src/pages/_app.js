import "@/styles/globals.css";
import "@/styles/style.scss"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
  return (
  <>
   <Analytics/>
  <Component {...pageProps} />
  </>
 )
  
}

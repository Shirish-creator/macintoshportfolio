import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Threed from "@/components/threedworld";



export default function Home() {
  return (
    <>
    <Head>
    <title>SHIRISH's Macintosh</title>
    </Head>
    
    <section className="w-full h-screen">
    <Threed/>
    </section>
    
    
    
    </>
  );
}

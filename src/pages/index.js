import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Canvas } from "react-three-fiber";
import Threed from "@/components/threedworld";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
    <title>this is new threed project</title>
    </Head>
    <section className="w-full h-screen">
    <Threed/>
    </section>
    
    
    
    </>
  );
}

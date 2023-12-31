import { AppContext } from '@/settings/globals';
import Link from "next/link";
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const router = useRouter(); 
  const {ip} = useContext(AppContext); //usecontext uses a curly bracket for destructuring, while useState is a square bracket
  console.log(ip);
  // console.log(router.query.language)
  
  // useEffect(() => { //delays the block of code till the functional component has been rendered to the browser
  //   setTimeout(() => {
  //     router.push('/account/make-transfer') //the website url is the last thing on the array, so we are redirecting
  //   }, 5000);  
  // },[])

  
  return ( 
    
    <>
      <Head>
        <link rel="icon" href="/facepal_icon_logo.png" />
        <meta name="description" content="The Coolest way to connect with friends and hold money" />
        <meta name="keywords" content="facepal" />
        <title>facepal | Connect with friends</title>
      </Head>
      <div className="h-screen w-full flex flex-col justify-around mobile-bg sm:tablet-bg lg:desktop-bg">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 px-8 sm:px-10 lg:px-24">
            <div className="w-full sm:min-h-[480px] bg-indigo-300/20 py-6 sm:py-10 px-[40px] rounded-lg">
                <h1 className="text-indigo-800 text-4xl sm:text-6xl font-mono font-bold">facepal</h1>
                <h2 className="text-2xl sm:text-3xl mt-4">The Coolest way to connect with friends and hold money</h2>
            </div>
            <div className="w-full sm:min-h-[480px] flex flex-col gap-5">
                <form className="flex flex-col gap-3">
                    <input 
                    type="email" 
                    placeholder="Email address"
                    className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
                    />
                    <input 
                    type="password" 
                    placeholder="Password"
                    className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
                    />
                    <button className="max-w-[160px] h-12 bg-indigo-800 rounded-lg text-white font-bold"
                    >Log in to facepal</button>
                </form>
        
                <div className="w-full grid grid-cols-2 gap-3">
                    <button className="w-full h-12 bg-green-600 rounded-lg text-white font-bold">Google</button>
                    <button className="w-full h-12 bg-sky-600 rounded-lg text-white font-bold">Twitter</button>
                </div>
        
                <p className="text-2xl text-white">New to facepal? <Link href="/auth/signup" className="underline">create account</Link></p>
            </div>
        </div>
      </div>
    </>
  )
}

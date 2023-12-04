"use client"
import React, { useEffect } from 'react'
import login from './login/page'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css';

const page = () => {
  
  return (
   <>
   <div className='bg-black h-screen w-full md:flex'>
      
      {/* left side of the div */}
      <div className='left bg-black md:h-full md:w-1/2 h-1/2 w-full'>
      
      <Image src="/logop.png" width={50} height={50} alt="Picture of the author" />
      <Link href="/login"><button type="button" className="top-0 right-0 mt-0 float-right bg-red-600 rounded-md hover:bg-orange-500 p-1">Login</button></Link>

      <h1 class="text-orange-200 md:text-6xl text-2xl h-1/2s hover:font-bold font-thin md:h-1/3 text-center overflow-x:hidden">The Best Way To Learn About A Place Is To Try  The Local Burger!</h1>
      <video
        className="m:w-full m:h-1/3 w-full h-1/2"
        autoPlay
        loop
        muted
        src="/homepagevideo.mp4"
      ></video>
      </div>

      {/* right side div */}
      <div className='right bg-black-500 md:h-full md:w-1/2 '>
      <img src='/1.jpeg' className='md:h-full md:w-screen w-screen' />
      </div>
   </div>

     {/* second div corousel */}
   <div className='md:h-full md:w-full h-full bg-orange-500 '>
      
</div>
   </>
  )
}
export default page

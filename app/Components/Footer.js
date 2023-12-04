import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='bg-black'>
    <footer className="text-red-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl text-gray-600">Burgerking</span>
    </a> */}
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0 mt-4 font-extrabold">© 2023 BurgerKing —
      <Link href="https://leetcode.com/FALCON-/" className="text-gray-500 ml-1 font-extrabold" rel="noopener noreferrer" target="_blank">@Himanshu</Link>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     
      <Link href="https://www.linkedin.com/in/himanshu-maurya-7b5273190/" className='className="text-gray-500'><Image
      src="/linkedin.png"
      width={20}
      height={20}
      alt=''
    /></Link>
      
      <Link href="mailto:mauryahimanshu567@gmail.com" className='ml-3 text-gray-500'><Image
      src="/gmail.png"
      width={20}
      height={20}
      alt=''
    /></Link>

      <Link href="https://github.com/falcon9205" className='ml-3 text-gray-500'><Image
      src="/github.png"
      width={20}
      height={20}
      alt=''
    /></Link>
     <Link href="https://t.me/Falcon9205" className='ml-3 text-gray-500'><Image
      src="/telegram.png"
      width={20}
      height={20}
      alt=''
    /></Link>
      
      <Link href="https://www.instagram.com/yeahthatshemu/" className='ml-3 text-gray-500'><Image
      src="/instagram.png"
      width={20}
      height={20}
      alt=''
    /></Link>

    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer


import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className=' bg-slate-900 flex justify-between'>
      <div>
      <Link href="/"><Image src="/logop.png" width={50} height={50} alt="Picture of the author" /></Link>
      </div>

      <div className=' text-white  flex gap-4 items-center'>
       <Link href="#" className=''>Deals</Link>
       <Link href="#">Veg</Link>
       <Link href="#">Non-Veg</Link>
       <button className="mr-5"><PiShoppingCart />
    </button>
      </div>
      {/* <div className='flex float-left'> 
      <Link href='#'><img src="/logop.png" className="md:h-10 md:w-10 hh-12 w-12 ml-1" alt="img"/></Link>
      <p className='ml-3 text-xl text-orange-300'>BurgerKing</p>
      </div>

      <div className='text-gray-400 '>
      <Link href="#" class="mr-5 hover:text-orange-500 text">Meals</Link>
      <Link href="#" class="mr-5 hover:text-orange-500">Veg</Link>
      <Link href="#" class="mr-5 hover:text-orange-500">Non-Veg</Link>
      </div>
      <Link href="/login"><button className='inline-flex items-center my-1 bg-red-800 h-7 w-15 hover:bg-orange-500 rounded'>Login</button></Link>
     */}
    </div>
  )
}

export default Navbar;
// import React from 'react'
// import Link from 'next/link'
// import { PiShoppingCart } from "react-icons/pi";

// const Navbar = () => {
//   return (
//     <div className='bg-orange-400'>
//        <header className="text-gray-600 body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

//       <Link href="/" className="ml-3 text-xl">Codeswear</Link>
//     </a>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//     <Link href="./tshirts" className="mr-5 hover:text-gray-900">Tshirts</Link>
//     <Link href="#" className="mr-5 hover:text-gray-900">Hoodies</Link>
//     <Link href="#" className="mr-5 hover:text-gray-900">Mugs</Link>
      
//     </nav>
//     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><PiShoppingCart />

//     </button>
//   </div>
// </header>
//     </div>
//   )
// }

// export default Navbar


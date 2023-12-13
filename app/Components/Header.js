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
       <Link href="/Deal" className=''>Deals</Link>
       <Link href="/Veg">Veg</Link>
       <Link href="/Nonveg">Non-Veg</Link>
       <button className="mr-5"><PiShoppingCart />
    </button>
      </div>
    </div>
  )
}

export default Navbar;



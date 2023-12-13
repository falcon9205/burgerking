"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
const product = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pin,setpin] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Service, setservice] = useState();
  const checkserivce = async()=>{
    let pins = await fetch('http://localhost:3000/api/pincode')
    let {pincode} = await pins.json();
    let pinJson = pincode;
       console.log(pinJson); 
       
    if(pinJson.includes(pin))
       {setservice(true);
        console.log(Service);
       }

    else
      { setservice(false); 
        console.log(Service);
      } 
  }
  const onchangepin = (e)=>{
    setpin(e.target.value)
  }
  
  return (
    <div>
       <>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <Image width={400} height={600} alt="ecommerce" className="" src="/Veg_images/1.png"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">We Delivered Good</h1>
       
        <p className="leading-relaxed">"Fast, Fresh, and at Your Fingertips: Enjoy Gourmet Burgers Delivered Right to Your Doorstep!"</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
         
         
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">₹ 2200.00</span>
          <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Add To Cart</button>
        </div>
        <div className='flex mt-5'>
        <input onChange={onchangepin} type="text" name="name" className='border-orange-600  p-2 bg-slate-800'  placeholder='Enter Pincode'/>
      <button onClick={checkserivce} type="submit" className='ml-auto text-white bg-orange-500 border-0  focus:outline-none hover:bg-orange-600 rounded p-3'>Check Pincode</button>
        </div>
        
        {(!Service && Service!=null) && <div className='text-sm text-red-600 mt-1'>
            SORRY! We do no delivered yet
        </div>
        }

        {(Service && Service!=null) &&  <div className='text-sm text-green-600 mt-1'>
            Yes! We delivered here
        </div>
        }

      </div>
    </div>
  </div>
</section>
        </>
    </div>
  )
}

export default product;


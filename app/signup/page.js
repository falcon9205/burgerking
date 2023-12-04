import React from 'react'
import Link from 'next/link';
import './signup.css'
const Signup = () => {
  return (
    <>
     <div className='box'>
        <div className='card'>
        <input type='text'  className='rounded-md' placeholder='Name' required/>
        <input type='number' maxlength="10" className='rounded-md' placeholder='Contact no.' required/>
        <input type='email' className='rounded-md' placeholder='Email-id' required/>
        <input type='password' className='rounded-md' minLength='8' placeholder='Password' required/>
        <input type='text' className='rounded-md' minLength='10' placeholder='Address' required/>
        <br/>
        <Link href="#"><button className='rounded-md' type='login'>Signup</button></Link>
        <br/>
        </div>
     </div>
    </>
  )
}

export default Signup;

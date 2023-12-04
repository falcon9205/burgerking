import React from 'react'
import './login.css'
import Link from 'next/link'
const login = () => {
  return (
    <>
     <div className='box'>
        <div className='card'>
        <input type='email' name='email' placeholder='Email-id' required/>
        <input type='password' name='password' minLength='8' placeholder='Password' required/>
        
  
         <div className='btn w-full'>
         <Link href="#"><button type='login' className='rounded-md'>Login</button></Link>
        <Link href="./signup"><button type='login' 
         className='rounded-md'>Signup</button></Link>
         <br/>
         <Link className="fp text-yellow-300" href="#">forgot-Password?</Link>
         </div>
        
        </div>
     </div>
    </>
  )
}
export default login;

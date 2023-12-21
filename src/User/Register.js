import React from 'react'
import logo from './logo.png'

const Register = () => {
  return (
    <div className='bg-secondary h-auto w-full'>
      <div className='bg-primary'>
      <div className=" w-full h-fit rounded-lg mt-5 overflow-hidden  shadow-xl">
         <div className="  text-green-500 mt-4 text-center">
             
           <div className="font-bold text-2xl mb-2">You have successfully <br/> logged in!! </div>
         </div>
      </div>
        {/* <img src={logo} alt='logo' className='' /> */}
      </div>

    </div>
  )
}

export default Register
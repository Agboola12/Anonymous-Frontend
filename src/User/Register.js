import React from 'react'
import logo from './logo.png'
import style from '../style/register.module.css'

const Register = () => {
  return (
    <div className=' py-5 h-auto w-full bg-gradient-to-r from-secondary to-primary'>
      <div className="w-[40%] py-4 mx-auto  bg-primary h-screen text-white rounded-2xl overflow-hidden shadow-lg">
        <div className='mt-5'>
          <img className="rounded  mx-auto w-28" src={logo} alt="Card image" />
        </div>
        <div className="px-6 py-4">
          <form>
            <div id={style.group} className='mt-[3em]'>
              <input required="" type="text" placeholder='Enter Your Username' className={style.input}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
            </div>
            <div id={style.group} className='mt-[3em]'>
              <input required="" type="email" placeholder='Enter Your email' className={style.input}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
            </div>
            <div id={style.group} className='mt-[3em]'>
              <input required="" type="password" placeholder='Enter Your Password' className={style.input}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
            </div>
            <div className='mt-12 text-center'>
              <button className='bg-gradient-to-r from-secondary to-primary w-60 h-14 text-white font-bold py-2 px-4 rounded text-center'>
                 Register</button><br/>
                 <router-link to="/login">Already an account? Login</router-link><br/>
                 <small className='text-light'>By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. (Check Disclaimer)</small>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Register
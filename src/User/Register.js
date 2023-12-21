import React, { useState } from 'react'
import logo from './logo.png'
import style from '../style/register.module.css'
import { Link } from 'react-router-dom'

const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser]=useState({
    username:"",
    email:"",
    password:""
  })

  const inputChange =(e)=>{
    const name = e.target.name
    const value = e.target.value
    setUser({...user, [name]:value})

  }  

  const handleSubmit =()=>{

  }

return (
  <div className=' py-5 h-auto w-full bg-gradient-to-r from-secondary to-primary'>
    <div className="w-[35%] py-4 mx-auto  bg-primary h-screen text-white rounded-2xl overflow-hidden shadow-lg">
      <div className='mt-5'>
        <img className="rounded  mx-auto w-28" src={logo} alt="wow" />
      </div>
      <div className="px-6 py-4">
        <h1 className={style.head}>Register</h1>
        <form method="post" action="" onSubmit={handleSubmit}>
          <div id={style.group} className='mt-[1em]'>
            <input required type="text" placeholder='Enter Your Username' className={style.input} name='username' value={user.username} onChange={inputChange}/>
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
          </div>
          <div id={style.group} className='mt-[2em]'>
            <input required="" type="email" placeholder='Enter Your email' className={style.input} name='email' value={user.email} onChange={inputChange}/>
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
          </div>
          <div id={style.group} className='mt-[2em]'>
            <input required="" type="password" placeholder='Enter Your Password' className={style.input} name='password' value={user.password} onChange={inputChange}/>
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
          </div>
          <div className='mt-12 text-center'>
            <button type='submit' disabled={isLoading} className='bg-gradient-to-r from-secondary to-primary w-60 h-14 text-white font-bold py-2 px-4 rounded text-center'>
            {isLoading ? "Saving post..." : "Register"}
           </button><br/>
           
           <Link to="/login" className={style.login}>Already an account? Login</Link><br/><br/>
           <small className='text-light'>By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. (Check Disclaimer)</small>
          </div>
        </form>
      </div>
    </div>
  </div>
)
}

export default Register
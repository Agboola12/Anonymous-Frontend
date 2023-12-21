import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './logo.png'
import style from '../style/register.module.css'
import BaseUrl from '../BaseUrl'
import axios from 'axios'

const Login = () => {

  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value
    }
    setIsLoading(true);
    axios.post(BaseUrl + "login", data).then
      (res => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          navigate("/user-message")
        }
      }).catch(err => {
        console.log(err.message)
      }).finally(() => {
        setIsLoading(false);
      })

  }

  return (
    <div className=' py-5 h-[100vh] w-full bg-gradient-to-r from-secondary to-primary'>
      <div className="w-[35%] py-4 mx-auto  bg-primary h-[90vh] text-white rounded-2xl overflow-hidden shadow-lg">
        <div className='mt-5'>
          <img className="rounded  mx-auto w-28" src={logo} alt="loko" />
        </div>
        <div className="px-6 py-4">
          <h1 className={style.head}>Login</h1>
          <form method="post" action="" enctype="multipart/form-data" onSubmit={handleSubmit}>
            <div id={style.group} className='mt-[1em]'>
              <input required ref={email} type="email" placeholder='Enter Your email' className={style.input} />
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
            </div>
            <div id={style.group} className='mt-[3em]'>
              <input required ref={password} type="password" placeholder='Enter Your Password' className={style.input} />
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
            </div>
            <div className='mt-12 text-center'>
              <button type='submit' disabled={isLoading} className='bg-gradient-to-r from-secondary to-primary w-60 h-14 text-white font-bold py-2 px-4 rounded text-center'>
                <b>
                  {isLoading ? "LoggingIn..." : "Login"}
                </b>
              </button><br />

              <Link to="/register" className={style.login}>Don't have an account?Register</Link><br /><br />
              <small className='text-light '>By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. (Check Disclaimer)</small>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login
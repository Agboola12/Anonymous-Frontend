import React, { useState } from 'react'
import logo from './logo.png'
import style from '../style/register.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BaseUrl from '../BaseUrl'
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const inputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })

  }

  const handleSubmit = () => {
    setIsLoading(true);
    axios.post(BaseUrl + "register", user)
      .then((res) => {
        if (res.data.status) {
          console.log(res)
          navigate('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        isLoading(false);
      })

  }

  return (
    // <div className=' py-5 h-auto w-full bg-gradient-to-r from-secondary to-primary'>
    //   <div className="w-[35%] py-4 mx-auto  bg-primary h-screen text-white rounded-2xl overflow-hidden shadow-lg">
    //     <div className='mt-5'>
    //       <img className="rounded  mx-auto w-28" src={logo} alt="wow" />
    //     </div>
    //     <div className="px-6 py-4">
          {/* <h1 className={style.head}>Register</h1> */}
          {/* <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white">
          Register
          </h1>

          <form method="post" action="" onSubmit={handleSubmit}>
            <div className='mt-[1em] relative sm:relative md:relative lg:relative'>
              <input required type="text" placeholder='Enter Your Username' 
                className="text-base sm:text-lg md:text-xl lg:text-2xl px-2 py-2 sm:px-4 sm:py-2 md:py-3 lg:py-4 w-full border-b border-purple-300 bg-transparent focus:outline-none" name='username' value={user.username} onChange={inputChange} />
              <span className="absolute h-3/5 w-12 bg-purple-500 top-1/4 left-0 opacity-50 pointer-events-none"></span>
              <span className={style.bar}></span>
            </div>

            <div id={style.group} className='mt-[2em]'>
              <input required="" type="email" placeholder='Enter Your email' className={style.input} name='email' value={user.email} onChange={inputChange} />
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
            </div>
            <div id={style.group} className='mt-[2em]'>
              <input required="" type="password" placeholder='Enter Your Password' className={style.input} name='password' value={user.password} onChange={inputChange} />
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
            </div>
            <div className='mt-12 text-center'>
              <button type='submit' disabled={isLoading} className='bg-gradient-to-r from-secondary to-primary w-60 h-14 text-white font-bold py-2 px-4 rounded text-center'>
                {isLoading ? "Saving post..." : "Register"}
              </button><br />

              <Link to="/login" className=''>Already an account? Login</Link><br /><br />
              <small className='text-light'>By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. (Check Disclaimer)</small>
            </div>
          </form>
        </div>
      </div>
    </div> */}

    <div className='h-screen py-5 w-full bg-gradient-to-r from-secondary to-primary'>
      <div className='w-full sm:w-2/3 md:w-1/1 lg:w-1/3 xl:w-1/3 mx-auto bg-primary text-white rounded-2xl overflow-hidden shadow-lg'>
        <div className='mt-5'>
          <img className='rounded mx-auto w-28' src={logo} alt='logo' />
        </div>
        <div className='px-6 py-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white'>
            Register
          </h1>
          <form
            method='post'
            action=''
            encType='multipart/form-data'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col mt-9'>
              <div className='relative mb-4'>
                <input
                  id='username'
                  name='username'
                  type='username'
                  required
                  ref={email}
                  name='username' value={user.username} onChange={inputChange}
                  className='w-full border-b border-primary-300 py-1 focus:border-b-2 focus:border-primary-700 transition-colors focus:outline-none peer bg-inherit'
                />
                <label
                  htmlFor='username'
                  className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700'
                >
                  Email
                </label>
              </div>
              <div className='relative mb-4'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  name='email' value={user.email} onChange={inputChange}
                  className='w-full border-b border-primary-300 py-1 focus:border-b-2 focus:border-primary-700 transition-colors focus:outline-none peer bg-inherit'
                />
                <label
                  htmlFor='email'
                  className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700'
                >
                  Email
                </label>
              </div>
              <div className='relative mt-5'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  name='password' value={user.password} onChange={inputChange}
                  className='w-full border-b border-primary-300 py-1 focus:border-b-2 focus:border-primary-700 transition-colors focus:outline-none peer bg-inherit'
                />
                <label
                  htmlFor='password'
                  className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700'
                >
                  Password
                </label>
              </div>
            </div>
            <div className='mt-8 text-center'>
              <button
                type='submit'
                disabled={isLoading}
                className='bg-gradient-to-r from-secondary to-primary w-full sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-1/3 h-14 text-white font-bold py-2 px-4 rounded text-center'
              >
                <b>{isLoading ? 'Signing Up...' : 'Register'}</b>
              </button>
              <br />
              <Link
                to='/register'
                className='text-lightgrey hover:text-blue-500'
              >
                Don't have an account? Login
              </Link>
              <br />
              <br />
              <small className='text-light'>
                By using this service, you agree to our Privacy Policy, Terms
                of Service and any related policies. (Check Disclaimer)
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
import React from 'react'
import logo from './logo.png'
import style from '../style/register.module.css'

const Register = () => {
  return (
    <div className=' py-5 h-auto w-full bg-gradient-to-r from-secondary to-primary'>
      <div className="w-[40%] py-4 mx-auto  bg-primary h-screen text-white rounded overflow-hidden shadow-lg">
        <div className='mt-5'>
          <img className="rounded  mx-auto w-40" src={logo} alt="Card image" />
        </div>
        <div className="px-6 py-4">
          <form>
            <div class={style.group}>
              <input required="" type="text" class={style.input}/>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className={style.label}>Name</label>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Register
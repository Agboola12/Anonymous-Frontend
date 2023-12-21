import React from 'react'

const Message = () => {
  return (
    <div className=' py-5 h-[100vh] w-full bg-gradient-to-r from-secondary to-primary'>
      <div className="w-[35%] py-4 mx-auto  bg-primary h-[90vh] text-white rounded-2xl overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <h1 className='text-center font-extrabold '>Say Something...</h1>
          <form>
            <div id={style.group} className='mt-[3em]'>
              <input required="" type="password" placeholder='Enter Your Password' className={style.input} />
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
            </div>
            <div className='mt-12 text-center'>
              <button className='bg-gradient-to-r from-secondary to-primary w-60 h-14 text-white font-bold py-2 px-4 rounded text-center'>
                Login
              </button><br />
              <Link to="/register" className={style.login}>Don't have an account?Register</Link><br /><br/>
              <small className='text-light '>By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. (Check Disclaimer)</small>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Message
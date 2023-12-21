import React from 'react'
import style from '../style/register.module.css'

const Message = () => {
  return (
    <div className=' py-5 h-[100vh] w-full bg-gradient-to-r from-secondary to-primary'>
      <div className="w-[35%] py-4 mx-auto  bg-primary h-[90vh] text-white rounded-2xl overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <h1 className={style.say}>Say Something...</h1>
          <form>
            <div id={style.group} className='mt-14'>
              <textarea required="" type="text" placeholder='Leave a message here ' className={style.input} />
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
              <label className={style.label}>Say Something About Me</label>
            </div>
            <div className='mt-12 text-center'>
              <button className='bg-gradient-to-r from-secondary to-primary w-80 h-14 rounded-full text-white font-bold py-2 px-4 rounded text-center'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Message
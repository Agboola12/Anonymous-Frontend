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
              {/* <textarea required="" type="text" placeholder='Leave a message here ' className={style.input} /> */}
              {/* <textarea
  type="text"
  class="text-base p-2 pb-1 border-b border-purple-300 bg-transparent w-full mt-20 h-30vh focus:outline-none"
  placeholder="Your Placeholder Text"
/> */}
<textarea
  type="text"
  className="text-base sm:text-lg md:text-xl lg:text-2xl bg-transparent border-b border-purple-300 w-full py-2 px-2 sm:px-4 lg:px-5 mt-5 h-1/3 sm:h-1/4 md:h-1/5 lg:h-1/3"
  placeholder="Your text here"
/>

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
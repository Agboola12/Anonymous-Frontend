import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import BaseUrl from '../BaseUrl';
import axios from 'axios';


const Message = () => {
  const message = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      message: message.current.value,
    };
    setIsLoading(true);
    axios
      .post(BaseUrl + 'message', data)
      .then((res) => {
        if (res.data.success) {
          navigate('/user-register');
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='h-screen py-5 w-full bg-gradient-to-r from-secondary to-primary'>
      <div className='w-full h-[90vh] sm:w-2/3 md:w-1/1 lg:w-1/3 xl:w-1/3 mx-auto bg-primary text-white rounded-2xl overflow-hidden shadow-lg'>
        <div className='px-6 py-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white'>
          Say Something...
          </h1>
          <form
            method='post'
            action=''
            encType='multipart/form-data'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col mt-[10vh]'>
              <div className='relative mb-4'>
                <textarea
                  id='message'
                  name='message'
                  type='message'
                  required
                  ref={message}
                  className='w-full h-[30vh] border-b border-primary-300 py-1 focus:border-b-2 focus:border-primary-700 transition-colors focus:outline-none peer bg-inherit'
                />
                <label
                  htmlFor='message'
                  className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700'
                >
                  Say Something about me
                </label>
              </div>
              
            </div>
            <div className='mt-8 text-center'>
              <button
                type='submit'
                disabled={isLoading}
                className='bg-gradient-to-r from-secondary to-primary w-full sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-1/3 h-14 text-white font-bold py-2 px-4 rounded text-center'
              >
                <b>{isLoading ? 'Sending...' : 'Send Message'}</b>
              </button>
              <br /><br/><br/>
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

export default Message
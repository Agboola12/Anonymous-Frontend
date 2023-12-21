import React from 'react'
import logo from './logo.png'

const Register = () => {
  return (
    <div className=' py-5 h-auto w-full bg-gradient-to-r from-secondary to-primary'>
      <div className="w-1/3 py-4 mx-auto  bg-primary h-screen text-white rounded overflow-hidden shadow-lg">
        <div className='mt-5'>
          <img className="rounded  mx-auto w-40" src={logo} alt="Card image" />
        </div>
        <div className="px-6 py-4">
            <form>
              </form>         
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Tag2</span>
        </div>
      </div>

    </div>
  )
}

export default Register
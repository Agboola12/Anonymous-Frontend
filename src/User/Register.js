import React from 'react'
import logo from './logo.png'

const Register = () => {
  return (
    <div className='bg-secondary h-auto w-full'>
      
      <div className="max-w-sm mx-auto mt-10 bg-primary text-white rounded overflow-hidden shadow-lg">
        <div className='mt-5'>
          <img className="rounded  mx-auto  w-48" src={logo} alt="Card image" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            This is the content of the card. You can add any text or other elements here.
          </p>
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
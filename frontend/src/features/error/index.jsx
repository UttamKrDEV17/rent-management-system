import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center text-4xl h-full w-full gap-4 bg-primary text-background font-semibold'>
        <p className='flex items-center justify-center'><span>Error!!</span> Opps Page Not Found.....</p>
        <Link to='/'>
          <button className='bg-background text-primary font-medium px-6 py-2 rounded-xl'>
          Back to Home
        </button>
        </Link>
    </div>
  )
}

export default Error
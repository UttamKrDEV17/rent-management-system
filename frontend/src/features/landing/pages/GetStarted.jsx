import React from 'react'
import {Link} from "react-router-dom"

const GetStarted = () => {
  return (
    <section className='w-full my-20'>
        <h1 className='text-2xl font-bold text-center'>Ready to streamline your property</h1>
        <Link to="/signup" className="text-lg font-bold flex items-center justify-center bg-primary text-secondary py-2 rounded-md my-6" >Get Started Free</Link>
        <p className='text-sm text-gray-500 text-center'>No credit card required for trial.</p>
    </section>
  )
}

export default GetStarted
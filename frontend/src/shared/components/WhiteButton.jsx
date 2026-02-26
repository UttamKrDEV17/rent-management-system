import React from 'react'
import {Link} from "react-router-dom"

const WhiteButton = ({text="button" , to="/home"}) => {
  return (
    <Link to={to}>
      <button className='hidden sm:flex items-center justify-center  px-4 py-2 text-sm font-semibold rounded-lg bg-transparent border text-navy border-gray-200 hover:bg-gray-50 transition-colors'>
        {text}
      </button>
    </Link>
    
  )
}

export default WhiteButton
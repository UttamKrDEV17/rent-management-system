import React from 'react'
import {Link} from "react-router-dom"

const GreenButton = ({text="button" , to="/home"}) => {
  return (
    <Link to={to}>
      <button className='flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary transition-colors shadow-sm shadow-primary/30'>
        {text}
      </button>
    </Link>
    
  )
}

export default GreenButton
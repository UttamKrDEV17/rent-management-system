import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className='w-screen overflow-hidden select-none'>
        <Outlet />
    </div>
  )
}

export default PublicLayout
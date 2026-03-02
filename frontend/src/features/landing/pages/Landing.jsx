import React from 'react'
import Hero from './Hero'
import DualValue from './DualValue'
import GetStarted from './GetStarted'

const Landing = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto px-4'>
        <Hero />
        <DualValue />
        <GetStarted />
      </div>
    </div>
  )
}

export default Landing
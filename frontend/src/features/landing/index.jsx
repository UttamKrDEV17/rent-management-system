import React from 'react'
import Header from './Header'
import Hero from './pages/Hero'
import DualValue from './pages/DualValue'
import GetStarted from './pages/GetStarted'
import HomeFooter from './HomeFooter'
import MainFooter from "./components/MainFooter"
import useLenis from '../../shared/hooks/useLenis'


  


const LandingPage = () => {

  useLenis();

  return (
    <div>
      <Header />
      <div className='max-w-7xl mx-auto px-4'>
        <Hero />
        <DualValue />
        <GetStarted />
      </div>
      <HomeFooter/>
      <MainFooter />
    </div>
  )
}

export default LandingPage
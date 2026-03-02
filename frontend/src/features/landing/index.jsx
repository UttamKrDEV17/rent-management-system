import React from 'react'
import Header from './Header'
import HomeFooter from './HomeFooter'
import MainFooter from "./components/MainFooter"
import useLenis from '../../shared/hooks/useLenis'
import { Outlet } from 'react-router-dom'


  


const LandingPage = () => {

  useLenis();

  return (
    <div>
      <Header />
        <Outlet />
      <HomeFooter/>
      <MainFooter />
    </div>
  )
}

export default LandingPage
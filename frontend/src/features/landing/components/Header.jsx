import React from 'react'
import {Warehouse} from 'lucide-react'

const Header = () => {
  return (
    <header className="md:h-16  h-18  bg-primary flex">
      <div className="bg-secondary ">
        <Warehouse />
      </div>
    </header>
  )
}

export default Header
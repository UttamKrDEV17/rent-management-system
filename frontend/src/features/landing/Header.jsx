import React from 'react'
import {Warehouse} from 'lucide-react'
import WhiteButton from '../../shared/components/WhiteButton'
import GreenButton from '../../shared/components/GreenButton'

const Header = () => {
  return (
    <header className="md:h-16 h-18 flex items-center justify-between p-4 sm:p-8">
        
        <div className='flex items-center justify-center gap-4'>
          <div className="bg-secondary px-2 py-3 rounded-xl">
            <Warehouse className='text-primary' />
          </div>
          <h1 className='font-bold text-2xl text-black'>
            Sangrah
          </h1>
        </div>

        <div className='font-medium text-gray-600 text-md'>
          <nav>
            <ul className='hidden md:flex gap-6'>
              <li className='hover:text-primary'>Features</li>
              <li className='hover:text-primary'>Pricing</li>
              <li className='hover:text-primary'>Resources</li>
              <li className='hover:text-primary'>About us</li>
            </ul>
          </nav>
        </div>

        <div className='flex gap-4'>
          <WhiteButton text='Owner Login' to='/login?type=owner' />
          <GreenButton text='Tenant' to='/login?type=tenant' />
        </div>
    
    </header>
  )
}

export default Header
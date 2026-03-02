import React from 'react'
import { Warehouse} from 'lucide-react'
import WhiteButton from '../../shared/components/WhiteButton'
import GreenButton from '../../shared/components/GreenButton'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="md:h-16 h-18 flex items-center justify-between p-4 sm:p-8">
        
        <div className='flex items-center justify-center gap-4'>
          <div className="bg-secondary px-2 py-3 rounded-xl">
            <Warehouse className='text-primary' />
          </div>
          <Link to="/" className='font-bold text-2xl text-black'>
            Sangrah
          </Link>
        </div>

        <div className='font-medium text-gray-600 text-md'>
          <nav>
            <ul className='hidden md:flex gap-6'>
              {[
        { label: 'Contact us', to: '/contact' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'About us', to: '/about' },
      ].map(({ label, to }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'}`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
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
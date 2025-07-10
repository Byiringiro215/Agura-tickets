import clsx from 'clsx'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'

interface NavlinksProps {
  link: string,
  href: string,
}

const NavbarLinks: NavlinksProps[] = [
  { link: 'Home', href: '/home' },
  { link: 'Events', href: '/events' },
  { link: 'Aboutus', href: '/aboutus' }
]
const Navbar = () => {
  const location = useLocation();
  return (
    <div className='flex justify-between items-center py- px-4'>
      <div>
        <Link to="/home">
          <img src="/logo.png" alt="logo" height={50} width={150} />
        </Link>
      </div>
      <div className='flex items-center items-center gap-6 '>
        {NavbarLinks.map((link, index) => {
          const isActive = location.pathname.startsWith(link.href);
          return (
            <Link
              to={link.href}
              key={index}
              className={clsx(
                'font-bold text-sm text-[#CDCDE0] px-2 py-1 relative',
                isActive && 'text-primary'
              )}
            >
              <span>{link.link}</span>
              <span
                className={clsx(
                  'block h-0.5 bg-primary absolute left-0 bottom-0 transition-all duration-300',
                  isActive ? 'w-full' : 'w-0'
                )}
              />
            </Link>
          )
        })}
        <Link to="/login">
          <Button variant="primary">Get Started</Button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

import { Droplet, Home, Leaf, Sprout } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-6 justify-between'>
        <div className='flex h-16 items-center gap-6'>
          <Leaf className='h-6 w-6' />

          <Separator orientation='vertical' className='h-6' />

          <nav className='flex items-center gap-2 lg:gap-4'>
            <NavLink to="/">
              <Home className='h-4 w-4' />
              Home
            </NavLink>

            <NavLink to="/ambient-conditions">
              <Sprout className='h-4 w-4' />
              Ambient conditions
            </NavLink>

            <NavLink to="/water-conditions">
              <Droplet className='h-4 w-4' />
              Water conditions
            </NavLink>
          </nav>
        </div>

        <div className='ml-auto flex items-center gap-2'>
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}

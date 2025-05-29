import { ChartNoAxesColumn, Home, Leaf } from 'lucide-react'

import { NavLink } from './nav-link'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center gap-6 px-6'>
        <Leaf className='h-6 w-6' />

        <Separator orientation='vertical' className='h-6' />

        <nav className='flex items-center gap-2 lg:space-x-6'>
          <NavLink to="/">
            <Home className='h-4 w-4' />
            Home
          </NavLink>

          <NavLink to="/charts">
            <ChartNoAxesColumn className='h-4 w-4' />
            Charts
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

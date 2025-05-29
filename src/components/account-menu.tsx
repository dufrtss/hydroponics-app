import { ChevronDown, LogOut, User, UserCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

export function AccountMenu() {
  const navigate = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex items-center gap-2 select-none'>
          <UserCircle className='h-6 w-6' />
          <ChevronDown className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel className='flex flex-col'>
          <span>Eduardo Freitas</span>
          <span className='text-xs font-normal text-muted-foreground'>
            eduardofragadefreitas@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className='h-4 w-4' />
          <span>User profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='text-rose-500 dark:text-rose-400' onClick={() => navigate('/sign-in')}>
          <LogOut className='h-4 w-4 text-rose-500 dark:text-rose-400' />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

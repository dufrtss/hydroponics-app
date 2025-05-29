import { Leaf } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className='min-h-screen grid grid-cols-2'>
      <div className='h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between'>
        <div className='flex items-center gap-3 text-lg font-medium text-foreground'>
          <Leaf className='h-5 w-5' />
          <span className='font-semibold'>Integrated Hydroponics Monitoring System</span>
        </div>
        
        <footer className='flex flex-col text-sm'>
          <span>
            Made with ♥  by
            <a
              href='https://github.com/dufrtss'
              target='_blank'
              className='hover:underline'> Eduardo Freitas </a>
            &
            <a
              href='https://github.com/SofiaMartinsLv'
              target='_blank'
              className='hover:underline'> Sofia Martins</a>
          </span>
          <span> Monitoring Panel &copy; Integrated Hydroponics Monitoring System - {new Date().getFullYear()}</span>
        </footer>
      </div>

      <div className='flex flex-col items-center justify-center relative'>
        <Outlet />
      </div>
    </div>
  )
}

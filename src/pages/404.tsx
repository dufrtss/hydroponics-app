import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl font-bold'>Page not found</h1>
      <p className='text-accent-foreground'>
        Return to the <Link to='/' className='text-green-600 dark:text-green-400'>Dashboard</Link>
      </p>
    </div>
  )
}

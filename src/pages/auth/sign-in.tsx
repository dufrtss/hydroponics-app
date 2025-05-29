import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()
  const navigate = useNavigate()

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
    
      toast.success('Authenticated.', {
        description: 'Enjoy your stay!'
      })

      navigate('/')
    } catch {
      toast.error('Invalid credentials.')
    }
  }

  return (
    <>
      <title>Hydroponics | Login</title>
      
      <div className='p-8'>
        <div>
          <Button variant='ghost' asChild className='absolute right-8 top-8'>
            <Link to="/sign-up">
              New account
            </Link>
          </Button>
        </div>

        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Access panel
            </h1>

            <p className='text-sm text-muted-foreground'>
              Monitor your hydroponics farm conditions.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>
                Email
              </Label>
              <Input id='email' type='email' {...register('email')} />

              <Label htmlFor='password'>
                Password
              </Label>
              <Input id='password' type='password' {...register('password')} />
            </div>

            <Button disabled={isSubmitting} className='w-full' type='submit'>
              Access panel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string()
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()
  const navigate = useNavigate()

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
    
      toast.success('Account successfully created.', {
        description: 'Start monitoring now.',
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in')
        }
      })
    } catch {
      toast.error('Invalid credentials.')
    }
  }

  return (
    <>
      <title>Hydroponics | Register</title>
      
      <div className='p-8'>
        <div>
          <Button variant='ghost' asChild className='absolute right-8 top-8'>
            <Link to="/sign-in">
              Login
            </Link>
          </Button>
        </div>
        
        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Register now and start monitoring
            </h1>

            <p className='text-sm text-muted-foreground'>
              Your farm awaits you.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='name'>
                Name
              </Label>
              <Input id='name' type='text' {...register('name')} />

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
              Register account
            </Button>

            <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
              Upon registration, you agree with our <a className="underline underline-offset-4">terms of service</a> and <a className="underline underline-offset-4">privacy politics</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

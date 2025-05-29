import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignIn() {
  return (
    <>
      <title>Hydroponics | Login</title>
      
      <div className='p-8'>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Access Panel
            </h1>

            <p className='text-sm text-muted-foreground'>
              Monitor your Hydroponics Farm Conditions!
            </p>
          </div>

          <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>
                Your e-mail
              </Label>
              <Input id='email' type='email' />
            </div>

            <Button className='w-full' type='submit'>
              Access Panel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

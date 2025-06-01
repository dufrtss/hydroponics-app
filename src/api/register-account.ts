import { api } from '@/lib/axios'

export interface RegisterAccountBody {
  name: string
  email: string
  password: string
}

export async function registerAccount({
  name,
  email,
  password
}: RegisterAccountBody) {
  await api.post('/accounts', {
    name,
    email,
    password
  })
}

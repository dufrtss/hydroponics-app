import './styles/global.css'

import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './router'

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="hydroponics-theme">
      <Toaster richColors />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

import { type ClassValue,clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const celsiusTickFormatter = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'celsius',
  maximumFractionDigits: 1
})

export const humidityTickFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
})

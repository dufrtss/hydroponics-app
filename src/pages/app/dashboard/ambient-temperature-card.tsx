import { Thermometer } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AmbientTemperatureCard() {
  return (
    <Card className='gap-2'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-base font-semibold'>
          Last temperature reading (°C)
        </CardTitle>
        <Thermometer className='h-4 w-4 text-muted-foreground' />
      </CardHeader>

      <CardContent className='flex flex-col gap-2'>
        <span className='text-2xl font-bold tracking-tight'>
          32 °C
        </span>
        <p className='text-xs text-muted-foreground'>
          {/* <span className='text-rose-500 dark:text-rose-400'> */}
            +2%
          {/* </span> */}
          {' '}increase in comparison to the last day
        </p>
      </CardContent>
    </Card>
  )
}

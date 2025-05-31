import { Gauge } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WaterEC25CCard() {
  return (
    <Card className='gap-2'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-base font-semibold'>
          Last EC 25 °C reading (mS/cm)
        </CardTitle>
        <Gauge className='h-4 w-4 text-muted-foreground' />
      </CardHeader>

      <CardContent className='flex flex-col gap-2'>
        <span className='text-2xl font-bold tracking-tight'>
          1.0 mS/cm
        </span>
        <p className='text-xs text-muted-foreground'>
          {/* <span className='text-rose-500 dark:text-rose-400'> */}
            +9%
          {/* </span> */}
          {' '}increase in comparison to the last day
        </p>
      </CardContent>
    </Card>
  )
}

import { useQuery } from '@tanstack/react-query'
import { startOfDay } from 'date-fns'
import { Droplet } from 'lucide-react'

import { fetchWaterEC25C } from '@/api/fetch-water-ec25c'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WaterEC25CCard() {
  const { data: waterEC25CReadings } = useQuery({
    queryFn: () => fetchWaterEC25C({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'latest-ec25c-reading']
  })

  return (
    <Card className='gap-2'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-base font-semibold'>
          Last EC 25 °C reading (mS/cm)
        </CardTitle>
        <Droplet className='h-4 w-4 text-muted-foreground' />
      </CardHeader>

      <CardContent className='flex flex-col gap-2'>
        {waterEC25CReadings && waterEC25CReadings.measurements.length > 0 && (
          <>
            <span className='text-2xl font-bold tracking-tight'>
              {waterEC25CReadings.measurements[0].data.value.toFixed(2)} {waterEC25CReadings.measurements[0].data.unit}
            </span>
          </>
        )}
      </CardContent>
    </Card>
  )
}

import { useQuery } from '@tanstack/react-query'
import { startOfDay } from 'date-fns'
import { AirVent } from 'lucide-react'

import { fetchAmbientHumidity } from '@/api/fetch-ambient-humidity'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AmbientHumidityCard() {
  const { data: ambientHumidityReadings } = useQuery({
    queryFn: () => fetchAmbientHumidity({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'ambient', 'latest-humidity-reading']
  })

  return (
    <Card className='gap-2'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-base font-semibold'>
          Last humidity reading (%RH)
        </CardTitle>
        <AirVent className='h-4 w-4 text-muted-foreground' />
      </CardHeader>

      <CardContent className='flex flex-col gap-2'>
        {ambientHumidityReadings && ambientHumidityReadings.measurements.length > 0 && (
          <>
            <span className='text-2xl font-bold tracking-tight'>
              {ambientHumidityReadings.measurements[0].data.value.toFixed(2)} {ambientHumidityReadings.measurements[0].data.unit}
            </span>
          </>
        )}
      </CardContent>
    </Card>
  )
}

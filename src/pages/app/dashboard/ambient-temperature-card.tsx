import { useQuery } from '@tanstack/react-query'
import { startOfDay } from 'date-fns'
import { Thermometer } from 'lucide-react'

import { fetchAmbientTemperature } from '@/api/fetch-ambient-temperature'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AmbientTemperatureCard() {
  const { data: ambientTemperatureReadings } = useQuery({
    queryFn: () => fetchAmbientTemperature({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'ambient', 'latest-temperature-reading']
  })

  return (
    <Card className='gap-2'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-base font-semibold'>
          Last temperature reading (°C)
        </CardTitle>
        <Thermometer className='h-4 w-4 text-muted-foreground' />
      </CardHeader>

      <CardContent className='flex flex-col gap-2'>
        {ambientTemperatureReadings && ambientTemperatureReadings.measurements.length > 0 && (
          <>
            <span className='text-2xl font-bold tracking-tight'>
              {ambientTemperatureReadings.measurements[0].data.value.toFixed(2)} {ambientTemperatureReadings.measurements[0].data.unit}
            </span>
          </>
        )}
      </CardContent>
    </Card>
  )
}

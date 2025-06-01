import { useQuery } from '@tanstack/react-query'
import { startOfDay } from 'date-fns'
import { Thermometer } from 'lucide-react'

import { fetchWaterTemperature } from '@/api/fetch-water-temperature'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WaterTemperatureCard() {
  const { data: waterTemperatureReadings } = useQuery({
    queryFn: () => fetchWaterTemperature({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'latest-temperature-reading']
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
        {waterTemperatureReadings && waterTemperatureReadings.measurements.length > 0 && (
          <>
            <span className='text-2xl font-bold tracking-tight'>
              {waterTemperatureReadings.measurements[0].data.value.toFixed(2)} {waterTemperatureReadings.measurements[0].data.unit}
            </span>
          </>
        )}
      </CardContent>
    </Card>
  )
}

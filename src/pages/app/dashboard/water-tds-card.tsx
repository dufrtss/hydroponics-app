import { useQuery } from '@tanstack/react-query'
import { startOfDay } from 'date-fns'
import { Droplet } from 'lucide-react'

import { fetchWaterTDS } from '@/api/fetch-water-tds'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WaterTDSCard() {
  const { data: waterTDSReadings } = useQuery({
    queryFn: () => fetchWaterTDS({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'latest-tds-reading']
  })
  
  return (
    <Card className='gap-2'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-base font-semibold'>
          Last TDS reading (ppm)
        </CardTitle>
        <Droplet className='h-4 w-4 text-muted-foreground' />
      </CardHeader>

      <CardContent className='flex flex-col gap-2'>
        {waterTDSReadings && waterTDSReadings.measurements.length > 0 && (
          <>
            <span className='text-2xl font-bold tracking-tight'>
              {waterTDSReadings.measurements[0].data.value.toFixed(2)} {waterTDSReadings.measurements[0].data.unit}
            </span>
          </>
        )}
      </CardContent>
    </Card>
  )
}

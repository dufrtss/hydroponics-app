import { useQuery } from '@tanstack/react-query'
import { startOfDay } from 'date-fns'
import { Droplet } from 'lucide-react'

import { fetchWaterPH } from '@/api/fetch-water-ph'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WaterPhCard() {
  const { data: waterPHReadings } = useQuery({
    queryFn: () => fetchWaterPH({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'latest-ph-reading']
  })
  
  return (
    <Card className='gap-2'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-base font-semibold'>
          Last pH reading (pH)
        </CardTitle>
        <Droplet className='h-4 w-4 text-muted-foreground' />
      </CardHeader>

      <CardContent className='flex flex-col gap-2'>
        {waterPHReadings && waterPHReadings.measurements.length > 0 && (
          <>
            <span className='text-2xl font-bold tracking-tight'>
              {waterPHReadings.measurements[0].data.value.toFixed(2)} {waterPHReadings.measurements[0].data.unit}
            </span>
          </>
        )}
      </CardContent>
    </Card>
  )
}

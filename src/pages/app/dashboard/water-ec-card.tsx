import { useQuery } from '@tanstack/react-query'
import { startOfDay } from 'date-fns'
import { Droplet } from 'lucide-react'

import { fetchWaterEC } from '@/api/fetch-water-ec'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WaterECCard() {
  const { data: waterECReadings } = useQuery({
    queryFn: () => fetchWaterEC({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'latest-ec-reading']
  })

  return (
    <Card className='gap-2'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-base font-semibold'>
          Last EC reading (mS/cm)
        </CardTitle>
        <Droplet className='h-4 w-4 text-muted-foreground' />
      </CardHeader>

      <CardContent className='flex flex-col gap-2'>
        {waterECReadings && waterECReadings.measurements.length > 0 && (
          <>
            <span className='text-2xl font-bold tracking-tight'>
              {waterECReadings.measurements[0].data.value.toFixed(2)} {waterECReadings.measurements[0].data.unit}
            </span>
          </>
        )}
      </CardContent>
    </Card>
  )
}

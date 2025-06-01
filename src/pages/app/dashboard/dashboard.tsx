import { Droplet, Sprout } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { AmbientConditionsChart } from './ambient-conditions-chart'
import { AmbientHumidityCard } from './ambient-humidity-card'
import { AmbientTemperatureCard } from './ambient-temperature-card'
import { ECChart } from './ec-chart'
import { WaterConditionsChart } from './water-conditions-chart'
import { WaterECCard } from './water-ec-card'
import { WaterEC25CCard } from './water-ec25c-card'
import { WaterPhCard } from './water-ph-card'
import { WaterTDSCard } from './water-tds-card'
import { WaterTemperatureCard } from './water-temperature-card'

export function Dashboard() {
  return (
    <>
      <title>Hydroponics | Home</title>

      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>

        <Tabs defaultValue='ambient'>
          <TabsList>
            <TabsTrigger value='ambient'>
              <Sprout className='w-4 h-4' />
              Ambient
            </TabsTrigger>
            <TabsTrigger value='water'>
              <Droplet className='w-4 h-4' />
              Water
            </TabsTrigger>
          </TabsList>

          <TabsContent value='ambient'>
            <div className='flex flex-col gap-4'>

              <div className='grid grid-cols-4 gap-4'>
                <AmbientTemperatureCard />
                <AmbientHumidityCard />
              </div>

              <div className='grid grid-cols-9 gap-4'>
                <AmbientConditionsChart />
              </div>
            </div>
          </TabsContent>

          <TabsContent value='water'>
            <div className='flex flex-col gap-4'>
              <div className='grid grid-cols-4 gap-4'>
                <WaterTemperatureCard />
                <WaterPhCard />
                <WaterTDSCard />
                <WaterECCard />
              </div>

              <div className='grid grid-cols-12 gap-4'>
                <WaterConditionsChart />
                <ECChart />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

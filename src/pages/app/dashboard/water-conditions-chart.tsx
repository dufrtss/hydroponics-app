import { useQuery } from '@tanstack/react-query'
import { startOfDay } from 'date-fns'
import { useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import { fetchWaterPH } from '@/api/fetch-water-ph'
import { fetchWaterTemperature } from '@/api/fetch-water-temperature'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import type {
  ChartConfig
} from '@/components/ui/chart'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { dateTickFormatter, dateTooltipLabelFormatter, phTickFormatter, temperatureTickFormatter } from '@/utils/chart-formatters'

const chartConfig = {
  temperature: {
    label: 'Temperature'
  },
  ph: {
    label: 'pH'
  }
} satisfies ChartConfig

export function WaterConditionsChart() {
  const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>('temperature')

  const { data: waterTemperatureReadings } = useQuery({
    queryFn: () => fetchWaterTemperature({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'temperature-readings']
  })

  const { data: waterPHReadings } = useQuery({
    queryFn: () => fetchWaterPH({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'ph-readings']
  })

  return (
    <Card className='col-span-6 flex-1 py-4 sm:py-0'>
      <CardHeader className='flex flex-col items-stretch justify-between border-b !p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0'>
          <CardTitle className='text-base font-medium'>
            Water conditions by period
          </CardTitle>
          <CardDescription>
            Showing temperature and pH readings for the last day
          </CardDescription>
        </div>

        <div className="flex">
          {Object.keys(chartConfig).map((key) => {
            const chart = key as keyof typeof chartConfig

            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-2 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl text-nowrap">
                  {
                    chart === 'temperature' ?
                      waterTemperatureReadings?.measurements[0].data.value.toFixed(2)
                      :
                      waterPHReadings?.measurements[0].data.value.toFixed(2)
                  }
                  <span>{chart === 'temperature' ? '°C' : 'pH'}</span>
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>

      <CardContent className='px-2 sm:p-6'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full px-2'>
          <LineChart
            accessibilityLayer
            data={
              activeChart === 'temperature' ?
                waterTemperatureReadings?.measurements.slice().reverse()
                :
                waterPHReadings?.measurements.slice().reverse()
            }
          >
            <YAxis
              stroke='#888'
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) => {
                if (activeChart === 'temperature') {
                  return `${temperatureTickFormatter.format(value)}`
                }

                if (activeChart === 'ph') {
                  return `${phTickFormatter.format(value)}pH`
                }

                return value.toString()
              }}
            />

            <XAxis
              dataKey='createdAt'
              stroke='#888'
              axisLine={false}
              tickLine={false}
              tickFormatter={dateTickFormatter}
              dy={16}
            />

            <CartesianGrid vertical={false} className='stroke-muted' />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-full"
                  formatter={(value) => (
                    <div className="text-muted-foreground flex min-w-[130px] gap-2 items-center justify-between text-xs">
                      <div className='flex gap-2 items-center'>
                        <div className='bg-green-500 p-1 rounded'></div>
                        {
                          activeChart === 'temperature' ?
                            chartConfig.temperature.label
                            :
                            chartConfig.ph.label
                        }
                      </div>
                      <div className="text-foreground ml-auto flex items-baseline gap-1 font-mono font-medium tabular-nums">
                        {typeof value === 'number' ? value.toFixed(2) : value}
                        <span className="text-muted-foreground font-normal">
                          {activeChart === 'temperature' ? '°C' : 'pH'}
                        </span>
                      </div>
                    </div>
                  )}
                  labelFormatter={dateTooltipLabelFormatter}
                />
              }
            />

            <Line
              dataKey={'data.value'}
              type='linear'
              strokeWidth={2}
              stroke={colors['green'][500]}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

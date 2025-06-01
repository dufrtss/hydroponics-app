import { useQuery } from '@tanstack/react-query'
import { startOfDay } from 'date-fns'
import { useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import { fetchWaterEC } from '@/api/fetch-water-ec'
import { fetchWaterEC25C } from '@/api/fetch-water-ec25c'
import { fetchWaterTDS } from '@/api/fetch-water-tds'
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
import { dateTickFormatter, dateTooltipLabelFormatter, ecTickFormatter } from '@/utils/chart-formatters'

const chartConfig = {
  tds: {
    label: 'TDS'
  },
  ec: {
    label: 'EC'
  },
  ec25c: {
    label: 'EC (25°C)'
  }
} satisfies ChartConfig

export function ECChart() {
  const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>('ec')

  const { data: waterTDSReadings } = useQuery({
    queryFn: () => fetchWaterTDS({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'tds-readings']
  })
    
  const { data: waterECReadings } = useQuery({
    queryFn: () => fetchWaterEC({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'ec-readings']
  })

  const { data: waterEC25CReadings } = useQuery({
    queryFn: () => fetchWaterEC25C({
      from: startOfDay(new Date()),
      to: new Date()
    }),
    queryKey: ['measurements', 'water', 'ec25c-readings']
  })
  

  return (
    <Card className='col-span-6 flex-1 py-4 sm:py-0'>
      <CardHeader className='flex flex-col items-stretch justify-between border-b !p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0'>
          <CardTitle className='text-base font-medium'>
            EC readings by period
          </CardTitle>
          <CardDescription>
            Showing EC readings for the last day
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
                    chart === 'tds' ?
                      waterTDSReadings?.measurements[0].data.value.toFixed(1)
                      : chart === 'ec' ?
                        waterECReadings?.measurements[0].data.value.toFixed(1)
                        :
                        waterEC25CReadings?.measurements[0].data.value.toFixed(1)
                  }
                  <span>{chart === 'tds' ? 'ppm' : 'mS/cm'}</span>
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
              activeChart === 'tds' ?
                waterTDSReadings?.measurements.slice().reverse()
                : activeChart === 'ec' ?
                  waterECReadings?.measurements.slice().reverse()
                  : waterEC25CReadings?.measurements.slice().reverse()
            }
          >
            <YAxis
              stroke='#888'
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) => {
                if (activeChart === 'ec' || activeChart === 'ec25c') {
                  return `${ecTickFormatter.format(value)}mS/cm`
                }

                if (activeChart === 'tds') {
                  return `${ecTickFormatter.format(value)}ppm`
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
                          activeChart === 'tds' ?
                            chartConfig.tds.label
                            : activeChart === 'ec' ?
                              chartConfig.ec.label
                              :
                              chartConfig.ec25c.label
                        }
                      </div>
                      <div className="text-foreground ml-auto flex items-baseline gap-1 font-mono font-medium tabular-nums">
                        {typeof value === 'number' ? value.toFixed(2) : value}
                        <span className="text-muted-foreground font-normal">
                          {activeChart === 'tds' ? 'ppm' : 'mS/cm'}
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

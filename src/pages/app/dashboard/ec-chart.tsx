import { useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

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

const data = [
  { date: '2025-05-23', tds: 80, ec: 1.0, ec25c: 1.0 },
  { date: '2025-05-24', tds: 82, ec: 1.3, ec25c: 1.1 },
  { date: '2025-05-25', tds: 85, ec: 1.2, ec25c: 1.3 },
  { date: '2025-05-26', tds: 100, ec: 1.6, ec25c: 0.9 },
  { date: '2025-05-27', tds: 150, ec: 0.9, ec25c: 1.0 },
  { date: '2025-05-28', tds: 94, ec: 1.8, ec25c: 1.4 },
  { date: '2025-05-29', tds: 73, ec: 1.4, ec25c: 1.7 },
  { date: '2025-05-30', tds: 112, ec: 1.2, ec25c: 1.3 }
]

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
                  {data[0][key as keyof typeof chartConfig].toLocaleString()}
                  <span>{chart === 'tds' ? 'ppm' : 'mS/cm'}</span>
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>

      <CardContent className='px-2 sm:p-6'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full px-2'>
          <LineChart accessibilityLayer data={data}>
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
              dataKey='date'
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
                  formatter={(value, name) => (
                    <div className="text-muted-foreground flex min-w-[130px] gap-2 items-center justify-between text-xs">
                      <div className='flex gap-2 items-center'>
                        <div className='bg-green-500 p-1 rounded'></div>
                        {chartConfig[name as keyof typeof chartConfig]?.label || name}
                      </div>
                      <div className="text-foreground ml-auto flex items-baseline gap-1 font-mono font-medium tabular-nums">
                        {value}
                        <span className="text-muted-foreground font-normal">
                          {name === 'tds' ? 'ppm' : 'mS/cm'}
                        </span>
                      </div>
                    </div>
                  )}
                  labelFormatter={dateTooltipLabelFormatter}
                />
              }
            />

            <Line
              dataKey={activeChart}
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

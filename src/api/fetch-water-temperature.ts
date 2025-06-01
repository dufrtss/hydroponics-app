import { api } from '@/lib/axios'

import type { Measurement } from './types/measurement'
import type { PaginationParams } from './types/pagination-params'
import type { TimePeriodParams } from './types/time-period-params'

export interface FetchWaterTemperatureRequest extends PaginationParams, TimePeriodParams {}

export interface FetchWaterTemperatureResponse {
  measurements: Measurement[]
}

export async function fetchWaterTemperature({
  page,
  pageSize,
  from,
  to
}: FetchWaterTemperatureRequest): Promise<FetchWaterTemperatureResponse> {
  const response = await api.get('/measurements/water/temperature', {
    params: {
      page,
      pageSize,
      from,
      to
    }
  })

  return response.data
}

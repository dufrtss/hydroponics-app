import { api } from '@/lib/axios'

import type { Measurement } from './types/measurement'
import type { PaginationParams } from './types/pagination-params'
import type { TimePeriodParams } from './types/time-period-params'

export interface FetchWaterPHRequest extends PaginationParams, TimePeriodParams {}

export interface FetchWaterPHResponse {
  measurements: Measurement[]
}

export async function fetchWaterPH({
  page,
  pageSize,
  from,
  to
}: FetchWaterPHRequest): Promise<FetchWaterPHResponse> {
  const response = await api.get('/measurements/water/ph', {
    params: {
      page,
      pageSize,
      from,
      to
    }
  })

  return response.data
}

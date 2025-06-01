import { api } from '@/lib/axios'

import type { Measurement } from './types/measurement'
import type { PaginationParams } from './types/pagination-params'
import type { TimePeriodParams } from './types/time-period-params'

export interface FetchWaterEC25CRequest extends PaginationParams, TimePeriodParams {}

export interface FetchWaterEC25CResponse {
  measurements: Measurement[]
}

export async function fetchWaterEC25C({
  page,
  pageSize,
  from,
  to
}: FetchWaterEC25CRequest): Promise<FetchWaterEC25CResponse> {
  const response = await api.get('/measurements/water/ec25c', {
    params: {
      page,
      pageSize,
      from,
      to
    }
  })

  return response.data
}

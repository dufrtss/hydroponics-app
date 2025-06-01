import { api } from '@/lib/axios'

import type { Measurement } from './types/measurement'
import type { PaginationParams } from './types/pagination-params'
import type { TimePeriodParams } from './types/time-period-params'

export interface FetchWaterECRequest extends PaginationParams, TimePeriodParams {}

export interface FetchWaterECResponse {
  measurements: Measurement[]
}

export async function fetchWaterEC({
  page,
  pageSize,
  from,
  to
}: FetchWaterECRequest): Promise<FetchWaterECResponse> {
  const response = await api.get('/measurements/water/ec', {
    params: {
      page,
      pageSize,
      from,
      to
    }
  })

  return response.data
}

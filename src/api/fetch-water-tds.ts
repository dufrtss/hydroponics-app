import { api } from '@/lib/axios'

import type { Measurement } from './types/measurement'
import type { PaginationParams } from './types/pagination-params'
import type { TimePeriodParams } from './types/time-period-params'

export interface FetchWaterTDSRequest extends PaginationParams, TimePeriodParams {}

export interface FetchWaterTDSResponse {
  measurements: Measurement[]
}

export async function fetchWaterTDS({
  page,
  pageSize,
  from,
  to
}: FetchWaterTDSRequest): Promise<FetchWaterTDSResponse> {
  const response = await api.get('/measurements/water/tds', {
    params: {
      page,
      pageSize,
      from,
      to
    }
  })

  return response.data
}

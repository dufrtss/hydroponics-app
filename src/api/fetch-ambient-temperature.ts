import { api } from '@/lib/axios'

import type { Measurement } from './types/measurement'
import type { PaginationParams } from './types/pagination-params'
import type { TimePeriodParams } from './types/time-period-params'

export interface FetchAmbientTemperatureRequest extends PaginationParams, TimePeriodParams {}

export interface FetchAmbientTemperatureResponse {
  measurements: Measurement[]
}

export async function fetchAmbientTemperature({
  page,
  pageSize,
  from,
  to
}: FetchAmbientTemperatureRequest): Promise<FetchAmbientTemperatureResponse> {
  const response = await api.get('/measurements/ambient/temperature', {
    params: {
      page,
      pageSize,
      from,
      to
    }
  })

  return response.data
}

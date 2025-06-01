import { api } from '@/lib/axios'

import type { Measurement } from './types/measurement'
import type { PaginationParams } from './types/pagination-params'
import type { TimePeriodParams } from './types/time-period-params'

export interface FetchAmbientHumidityRequest extends PaginationParams, TimePeriodParams {}

export interface FetchAmbientHumidityResponse {
  measurements: Measurement[]
}

export async function fetchAmbientHumidity({
  page,
  pageSize,
  from,
  to
}: FetchAmbientHumidityRequest): Promise<FetchAmbientHumidityResponse> {
  const response = await api.get('/measurements/ambient/humidity', {
    params: {
      page,
      pageSize,
      from,
      to
    }
  })

  return response.data
}

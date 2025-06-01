export interface Measurement {
  id: string
  sensorType: string
  measurementCategory: 'WATER' | 'AMBIENT'
  measurementType: 'TEMPERATURE' | 'HUMIDITY' | 'PH' | 'TDS' | 'EC' | 'EC25C'
  receivedAt: number
  createdAt: number
  data: SensorData
}

interface SensorData {
  value: number
  unit: string
}

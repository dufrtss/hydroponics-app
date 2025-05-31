export interface Measurement {
  id: string
  sensorType: string
  measurementCategory: string
  measurementType: string
  timestamp: string
  data: SensorData
}

interface SensorData {
  value: number
  unit: string
}

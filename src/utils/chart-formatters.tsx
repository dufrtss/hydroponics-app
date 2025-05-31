export const temperatureTickFormatter = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'celsius',
  maximumFractionDigits: 1
})

export const humidityTickFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 1
})

export const ecTickFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 1
})

export const tdsTickFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0
})

export const phTickFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 1
})

export function dateTickFormatter(value: string | number) {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  })
}

export function dateTooltipLabelFormatter(value: string | number) {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export const celsiusTickFormatter = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'celsius',
  maximumFractionDigits: 1
})

export const humidityTickFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
})

export function dateTooltipLabelFormatter(value: string | number) {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export interface ExpiryOption {
  label: string
  value: number
}

export const EXPIRY_OPTIONS: ExpiryOption[] = [
  { label: '1小时', value: 1000 * 60 * 60 },
  { label: '24小时', value: 1000 * 60 * 60 * 24 },
  { label: '3天', value: 1000 * 60 * 60 * 24 * 3 },
  { label: '14天', value: 1000 * 60 * 60 * 24 * 14 },
  { label: '30天', value: 1000 * 60 * 60 * 24 * 30 },
  { label: '90天', value: 1000 * 60 * 60 * 24 * 90 },
  { label: '180天', value: 1000 * 60 * 60 * 24 * 180 },
  { label: '360天', value: 1000 * 60 * 60 * 24 * 360 },
  { label: '永久', value: 0 }
]

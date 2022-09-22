export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'poor' | 'ok'

export interface DairyEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type DairyEntriesWithNoSenstiveInfo = Pick<DairyEntry, 'id' | 'date' | 'weather' | 'visibility' >
export type DairyEntriesWithNoSenstiveInfo = Omit<DairyEntry, 'comment'>

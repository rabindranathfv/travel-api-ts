export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Season = 'winter' | 'summer' | 'fall' | 'spring'

export interface TravelEntry {
  id: number
  date: string
  weather: Weather
  season: Season
  amountPeople: string
  comment: string
}

export type TravelEntriesWithSpecificInfo = Omit<TravelEntry, 'comment' | 'amountPeople'>

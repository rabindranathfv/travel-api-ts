// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Season = 'winter' | 'summer' | 'fall' | 'spring'

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Clody = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Season {
  Winter = 'Winter',
  Summer = 'Summer',
  Fall = 'fall',
  Spring = 'spring'
}

export interface TravelEntry {
  id: number
  date: string
  weather: Weather
  season: Season
  amountPeople: string
  comment: string
}

export type TravelEntriesWithSpecificInfo = Omit<TravelEntry, 'comment' | 'amountPeople'>

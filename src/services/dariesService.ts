import { Request, Response } from 'express'

import travelsData from './travels.json'
import { TravelEntry, TravelEntriesWithSpecificInfo } from '../types'

const travelEntries: TravelEntry[] = travelsData as Array<TravelEntry>

export const getTravels = (): TravelEntry[] => travelEntries

export const getTravelsWithNoSenstiveInfo = (): TravelEntriesWithSpecificInfo[] => {
  return travelEntries.map(({ id, weather, season, date }: TravelEntriesWithSpecificInfo) => {
    return {
      id,
      date,
      weather,
      season
    }
  })
}

export const getTravelById = (_req: Request, res: Response, id: number): Response<TravelEntry | undefined, any> => {
  const dairyById = travelEntries.find(d => d.id === id)
  if (dairyById !== undefined) {
    return res.json({
      ok: true,
      msg: 'success response',
      dairy: dairyById
    })
  }

  return res.status(404).json({
    ok: false,
    msg: 'some troubles at backend'
  })
}

export const addTravel = (_req: Request, res: Response, { comment, date, weather, season, amountPeople }: TravelEntry): Response<TravelEntry, any> => {
  const newTravelEntry = {
    id: travelEntries.length + 1,
    date,
    weather,
    season,
    amountPeople,
    comment
  }

  travelEntries.push(newTravelEntry)

  return res.json({
    ok: true,
    msg: 'new travel register succesfully created sucessfully',
    travel: { ...newTravelEntry }
  })
}

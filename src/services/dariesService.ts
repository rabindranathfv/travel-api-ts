import { Request, Response } from 'express'

import dariesData from './daries.json'
import { DairyEntry, DairyEntriesWithNoSenstiveInfo } from '../types'

const dariesEntries: DairyEntry[] = dariesData as DairyEntry[]

export const getEntries = (): DairyEntry[] => dariesEntries

export const getEntriesWithNoSenstiveInfo = (): DairyEntriesWithNoSenstiveInfo[] => {
  return dariesEntries.map(({ id, weather, visibility, date }: DairyEntriesWithNoSenstiveInfo) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const getEntryById = (_req: Request, res: Response, id: number): Response<DairyEntry | undefined, any> => {
  const dairyById = dariesEntries.find(d => d.id === id)
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

export const addEntry = (_req: Request, res: Response, { comment, date, weather, visibility }: DairyEntry): Response<DairyEntry, any> => {
  const newDairyEntry = {
    id: dariesEntries.length + 1,
    date,
    weather,
    visibility,
    comment
  }

  dariesEntries.push(newDairyEntry)

  return res.json({
    ok: true,
    msg: 'new dairy entry created sucessfully',
    dairy: { ...newDairyEntry }
  })
}

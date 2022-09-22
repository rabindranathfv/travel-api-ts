import { request, response } from 'express'
import { addEntry, getEntries, getEntriesWithNoSenstiveInfo } from '../services/dariesService'
import { getEntryById } from './../services/dariesService'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getAllEntriesCtrl = (_req: typeof request, res: typeof response) => {
  console.log('getAllEntries Controller')
  res.send(getEntries())
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getEntriesWithNoSenstiveInfoCtrl = (_req: typeof request, res: typeof response) => {
  console.log('getEntriesWithNoSenstiveInfo Controller')
  res.send(getEntriesWithNoSenstiveInfo())
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getEntryByIdCtrl = (req: typeof request, res: typeof response) => {
  console.log('getEntryById Controller')
  const { id } = req.params
  if (id !== undefined && id !== null && id !== '') res.send(getEntryById(req, res, Number(id)))

  return res.status(404).json({
    ok: true,
    msg: 'does not exist this id'
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const addEntryCtrl = (req: typeof request, res: typeof response) => {
  addEntry(req, res, { ...req.body })
}

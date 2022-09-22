import { request, response } from 'express'
import { addTravel, getTravelsWithNoSenstiveInfo, getTravels, getTravelById } from '../services/dariesService'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getAllEntriesCtrl = (_req: typeof request, res: typeof response) => {
  console.log('getAllEntries Controller')
  res.send(getTravels())
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getEntriesWithNoSenstiveInfoCtrl = (_req: typeof request, res: typeof response) => {
  console.log('getEntriesWithNoSenstiveInfo Controller')
  res.send(getTravelsWithNoSenstiveInfo())
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getEntryByIdCtrl = (req: typeof request, res: typeof response) => {
  console.log('getEntryById Controller')
  const { id } = req.params
  if (id !== undefined && id !== null && id !== '') res.send(getTravelById(req, res, Number(id)))

  return res.status(404).json({
    ok: true,
    msg: 'does not exist this id'
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const addEntryCtrl = (req: typeof request, res: typeof response) => {
  addTravel(req, res, { ...req.body })
}

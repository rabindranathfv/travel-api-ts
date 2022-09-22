import express, { Request, Response } from 'express'
import { addEntryCtrl, getAllEntriesCtrl, getEntriesWithNoSenstiveInfoCtrl, getEntryByIdCtrl } from '../controllers/travelController'
import { schemaTravel, validateBody } from './../middlewares/validateBody'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  getAllEntriesCtrl(_req, res)
})

router.get('/non-sensitive', (_req: Request, res: Response) => {
  getEntriesWithNoSenstiveInfoCtrl(_req, res)
})

router.get('/:id', (req: Request, res: Response) => {
  getEntryByIdCtrl(req, res)
})

router.post('/', [validateBody(schemaTravel)], async (_req: Request, res: Response) => {
  addEntryCtrl(_req, res)
})

export default router

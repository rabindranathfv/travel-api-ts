import express from 'express'
import { addEntryCtrl, getAllEntriesCtrl, getEntriesWithNoSenstiveInfoCtrl, getEntryByIdCtrl } from './../controllers/dariesController'

const router = express.Router()

router.get('/', (_req, res) => {
  getAllEntriesCtrl(_req, res)
})

router.get('/non-sensitive', (_req, res) => {
  getEntriesWithNoSenstiveInfoCtrl(_req, res)
})

router.get('/:id', (req, res) => {
  getEntryByIdCtrl(req, res)
})

router.post('/', (_req, res) => {
  addEntryCtrl(_req, res)
})

export default router

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import expressStatusMonitor from 'express-status-monitor'
import displayRoutes from 'express-routemap'

import travelRouter from './routes/travel'
import { configStatusMonitor } from './monitor/configStatusMonitor'

const app = express()
const PORT = 3000

app.use(expressStatusMonitor(configStatusMonitor))
app.use(express.json())
app.use(cors({
  allowedHeaders: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  origin: '*'
}))
app.use(helmet())

app.use('/api/v1/travel', travelRouter)

app.get('/alive', (_req, res) => {
  console.log('API ALIVE YESS****')
  res.send('up and running')
})

app.listen(PORT, () => {
  displayRoutes(app)
  console.log(`Running services in ${PORT}, Welcome`)
})

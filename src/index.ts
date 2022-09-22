import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import travelRouter from './routes/travel'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/api/v1/travel', travelRouter)

app.get('/alive', (_req, res) => {
  console.log('API ALIVE YESS****')
  res.send('up and running')
})

app.listen(PORT, () => {
  console.log(`Running services in ${PORT}, Welcome`)
})

import express from 'express'

import DariesRouter from './routes/daries'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/api/v1/dairies', DariesRouter)

app.get('/alive', (_req, res) => {
  console.log('API ALIVE YESS****')
  res.send('up and running')
})

app.listen(PORT, () => {
  console.log(`Running services in ${PORT}, Welcome`)
})

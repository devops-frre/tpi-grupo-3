import express from 'express'
import config from 'config'
import bodyParser from 'body-parser'
import cors from 'cors'
import {bindDB} from './setup/index'
import { mainRouter } from './routes'

bindDB()

const app = express()
const port = config.get('port')

app.use(cors())
app.use(bodyParser.json())

app.use(mainRouter)

// TODO: remove
app.get('/test', (req, res) => {
  res.send({ project: 'Mascotas' })
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`)
})

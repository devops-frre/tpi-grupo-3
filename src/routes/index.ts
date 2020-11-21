import express from 'express'

import { petRouter } from './pets'

const mainRouter = express.Router()

mainRouter.use('/pets', petRouter)


export { mainRouter }

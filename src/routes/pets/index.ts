import express from 'express'
import { Logger } from "src/features/logger"

import { PetService, } from 'src/features/pet'




const petRouter = express.Router()

/**
 * Get all pets
 */
petRouter.get('/', async (req, res, next) => {
  try {
    const pets = await PetService.findAll()
    res.send({ pets })
  } catch (error) {
    Logger.error(`Error finding all pets: ${error.message}`, { stack: error.stack })
    next(error)
  }
})

/**
 * Get a specific pet
 * @param {string} req.params.id
 */
petRouter.get('/:id',  async (req, res, next) => {
  const petId = parseInt(req.params.id)
  try {
    const pet = await PetService.findById(petId)
    res.send({ pet })
  } catch (error) {
    Logger.error(`Error finding pet ${petId}: ${error.message}`, { stack: error.stack })
    next(error)
  }
})

/**
 * Create pet
 * @param {string} req.params.id
 */
petRouter.post('/',  async (req, res, next) => {
  const petPayload = req.body.pet

  try {
    const pet = await PetService.create(petPayload)
    res.send({ pet })
  } catch (error) {
    Logger.error(`Error updating pets: ${error.message}`, { stack: error.stack })
    next(error)
  }
})
/**
 * Update existing pet
 * @param {string} req.params.id
 */
petRouter.put('/:id',  async (req, res, next) => {
  const petId = parseInt(req.params.id)
  const petPayload = req.body.pet
  try {
    const pet = await PetService.updateById(petId, petPayload)
    res.send({ pet })
  } catch (error) {
    Logger.error(`Error updating pet ${petId}: ${error.message}`, { stack: error.stack })
    next(error)
  }
})

/**
 * Delete existing pet
 * @param {string} req.params.id
 */
petRouter.delete('/:id', async (req, res, next) => {
  const petId = parseInt(req.params.id)
  try {
    await PetService.deleteById(petId)
    res.sendStatus(200)
  } catch (error) {
    Logger.error(`Error deleting pet ${petId}: ${error.message}`, { stack: error.stack })
    next(error)
  }
})

export { petRouter }

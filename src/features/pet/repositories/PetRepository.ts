import { ResourceNotFound } from 'src/errors'

import { PetModel } from '../models'
import { Pet, CreatePetObject, UpdatePetObject } from '../types'

const findAll = async (): Promise<Pet[]> => {
  const petModels = await PetModel.query().select()
  return petModels.map(model => model.toJSON())
}

const findById = async (id: number): Promise<Pet> => {
  const petModel = await PetModel.query().findById(id)
  if (!petModel) throw new ResourceNotFound('Pet')
  return petModel.toJSON()
}

const create = async (petObject: CreatePetObject): Promise<Pet> => {
  
  const petModel = await PetModel.query().insert(petObject)
  return petModel.toJSON()
}

const updateById = async (id: number, petPayload: UpdatePetObject): Promise<Pet> => {
  const petModel = await PetModel.query().patchAndFetchById(id, petPayload)
  if (!petModel) throw new ResourceNotFound('Pet')

  return petModel.toJSON()
}

const deleteById = async (id: number): Promise<void> => {
  const petModel = await PetModel.query().deleteById(id)
  if (!petModel) throw new ResourceNotFound('Pet')
}

export const PetRepository = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
}

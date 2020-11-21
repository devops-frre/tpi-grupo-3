import { PetRepository } from '../repositories'

const { findAll, create, updateById, findById, deleteById } = PetRepository

export const PetService = {
  findAll,
  create,
  updateById,
  findById,
  deleteById,
}

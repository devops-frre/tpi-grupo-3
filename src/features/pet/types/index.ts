import Objection from 'objection'

import { PetModel } from '../models'

export type Pet = Objection.ModelObject<PetModel>

export type CreatePetObject = Omit<Pet, 'id'>

export type UpdatePetObject = Partial<Omit<Pet, 'id' | 'petOwnerId'>>

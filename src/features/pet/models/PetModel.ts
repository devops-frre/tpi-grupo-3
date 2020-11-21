import { Model } from 'objection'

import { Gender, Size } from 'src/types'

export class PetModel extends Model {
  id!: number

  weight?: string

  name!: string

  gender!: Gender

  castrated!: boolean

  aggressiveness?: number

  age?: number

  size?: Size

  photo?: string

  chip?: boolean

  note?: string

  static tableName = 'Pets'

  static jsonSchema = {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      weight: { type: 'string' },
      name: { type: 'string' },
      gender: { type: 'string', enum: [Gender.Female, Gender.Male] },
      castrated: { type: 'boolean' },
      aggressiveness: { type: 'integer' },
      age: { type: 'integer' },
      size: { type: 'string', enum: [Size.Small, Size.Medium, Size.Big] },
      photo: { type: 'string' },
      chip: { type: 'boolean' },
      note: { type: 'string' },
    },
  }
}

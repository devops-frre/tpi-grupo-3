import * as Knex from 'knex'

exports.up = (knex: Knex) => {
  return knex.schema.createTable('Pets', table => {
    table.increments('id').primary()
    table.string('weight')
    table.string('name')
    table.enum('gender', ['male', 'female'])
    table.boolean('castrated')
    table.integer('aggressiveness')
    table.integer('age')
    table.string('photo')
    table.enum('size', ['small', 'medium', 'big'])
    table.boolean('chip')
    table.string('note')
  })
}

exports.down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('Pets')
}

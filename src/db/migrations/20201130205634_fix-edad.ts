import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('Pets', table => {
    table.renameColumn('edad', 'age')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('Pets', table => {
    table.renameColumn('age', 'edad')
  })
}


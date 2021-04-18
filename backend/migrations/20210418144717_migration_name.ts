import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('users', (table: Knex.TableBuilder) => {
      table.increments('id').primary();
      table.string('username').notNullable().unique();
      table.string('firstname').notNullable();
      table.string('lastname').notNullable();
      table.string('password');
    })
    .createTable('notes', (table: Knex.TableBuilder) => {
      table.increments('id').primary();
      table.string('author').references('id').inTable('users');
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users').dropTableIfExists('notes');
}

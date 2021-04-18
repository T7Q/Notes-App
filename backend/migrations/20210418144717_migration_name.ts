import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('users', (table: Knex.TableBuilder) => {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
      table.integer('email');
    })
    .createTable('books', (table: Knex.TableBuilder) => {
      table.increments('id').primary();
      table.string('author');
      table.string('title');
      table.string('description');
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users').dropTableIfExists('books');
}

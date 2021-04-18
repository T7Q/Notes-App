import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // truncate all existing tables
  await knex.raw('TRUNCATE TABLE "users" CASCADE');
  await knex.raw('TRUNCATE TABLE "notes" CASCADE');

  // Deletes ALL existing entries
  await knex('table_name').del();

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, username: 'user', password: 'hello', firstname: 'Jack', lastname: 'Daniels' },
    { id: 2, username: 'user', password: 'hello', firstname: 'Jane', lastname: 'Doe' },
  ]);

  // Inserts seed entries
  await knex('notes').insert([
    { id: 1, author: 1, title: 'First Note', description: 'Some Description' },
    { id: 2, author: 2, title: 'Cook note', description: 'Some Description from author 2' },
  ]);
}

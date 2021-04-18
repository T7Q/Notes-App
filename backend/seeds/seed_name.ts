import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('table_name').del();

  // Inserts seed entries
  await knex('books').insert([
    { id: 1, author: 'Moby Dick Author', title: 'Moby Dick', description: 'Some Description' },
  ]);
}

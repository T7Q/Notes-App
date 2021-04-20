import { knexSnakeCaseMappers } from 'objection';

const knexConfig = {
  development: {
    client: 'pg',
    connection: {
      database: 'test_db',
      user: 'tkuumola',
      password: 'pass',
    },
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
  ...knexSnakeCaseMappers,
};

export default knexConfig;

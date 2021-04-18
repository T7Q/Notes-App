import { knexSnakeCaseMappers } from 'objection';

const knexConfig = {
  development: {
    client: 'pg',
    connection: {
      database: 'objection_db',
      user: 'root',
      password: null,
    },
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations',
  },
  seeds: {
    directory: './seeds',
  },
  ...knexSnakeCaseMappers,
};

export default knexConfig;

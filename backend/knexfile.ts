const knexConfig = {
  development: {
    client: 'pg',
    connection: {
      user: 'posgtres',
      password: 'pass',
      database: 'koadb',
    },
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations',
  },
  seeds: {
    directory: './seeds',
  },
};

export default knexConfig;

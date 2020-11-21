export const getKnexConfig = (dbConfig: { [key: string]: string }) => {
  const baseConfig = {
    client: 'mysql2',
    connection: dbConfig,
    migrations: {
      directory: 'src/db/migrations',
    },
    seeds: {
      directory: 'src/db/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  }

  return {
    development: baseConfig,
    staging: baseConfig,
    production: baseConfig,
  }
}

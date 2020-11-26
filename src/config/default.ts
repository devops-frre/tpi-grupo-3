export default {
  port: process.env.PORT ?? 3000,
  env: process.env.NODE_ENV ?? 'development',
  serverAddress: process.env.SERVER_ADDRESS,
  database: {
    user: 'root',
    password: '1234',
    database: 'devops',
    host: '127.0.0.1',
  },
}

// user: process.env.DB_USER,
// password: process.env.DB_PASSWORD,
// database: process.env.DB_NAME,
// host: process.env.DB_HOST,

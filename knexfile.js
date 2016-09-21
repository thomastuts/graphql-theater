const config = require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: config.DATABASE_NAME,
      user: config.DATABASE_USER,
      password: config.DATABASE_PASSWORD,
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds/dev'
    },
  },
};

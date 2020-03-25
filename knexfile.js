module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '',
      database: 'ecommerce'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

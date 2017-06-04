module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/travel'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
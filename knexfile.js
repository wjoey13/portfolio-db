// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:'postgresql://localhost/portfolio-db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
  
};

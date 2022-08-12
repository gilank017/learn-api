const {Client} = require('pg')

const client = new Client({
  host: process.env.PGSQL_HOST,
  user: process.env.PGSQL_USER,
  port: process.env.PGSQL_PORT,
  password: process.env.PGSQL_PASSWORD,
  database: process.env.PGSQL_DATABASE
})

client.connect(err => {
  if (err) {
    console.log(err.message)
  } else {
    console.log('database terkoneksi')
  }
})

module.exports = client
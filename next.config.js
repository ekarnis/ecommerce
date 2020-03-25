require('dotenv').config()
module.exports = {
  env: {
    PG_CONNECTION_STRING: process.env.PG_CONNECTION_STRING
  }
}

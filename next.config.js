require('dotenv').config()
module.exports = {
  env: {
    PG_CONNECTION_STRING: process.env.PG_CONNECTION_STRING,
    REACT_APP_REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI
  }
}

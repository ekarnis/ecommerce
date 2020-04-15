require('dotenv').config()
module.exports = {
  env: {
    PG_CONNECTION_STRING: process.env.PG_CONNECTION_STRING,
    REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL
  }
}

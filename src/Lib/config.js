const dotenv = require("dotenv/config")

module.exports = {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.PORT,
  MONGO_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  PAYPAL_CLIENT: process.env.PAYPAL_CLIENT,
  PAYPAL_SECRET: process.env.PAYPAL_SECRET,
  PAYPAL_API_URL: process.env.PAYPAL_API_URL,
  SKY_DOG_FRONT_URL: process.env.SKY_DOG_FRONT_URL
}

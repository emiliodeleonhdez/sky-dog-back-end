const mongoose = require("mongoose")
const config = require("./config")
const mongUrl = config.MONGO_URL

const connect = () =>
  new Promise((resolve, reject) => {
    mongoose.set("strictQuery", false)
    mongoose.connect(`${mongUrl}`, {
      useNewUrlParser: true
    })
    const db = mongoose.connection

    db.on("open", () => {
      console.warn("Connection successful")
      resolve(mongoose)
    })

    db.on("error", (error) => {
      console.error("Connection failed", error)
      reject(error)
    })
  })

module.exports = {
  connect
}

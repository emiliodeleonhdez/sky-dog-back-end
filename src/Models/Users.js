const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true }
  //   services: [{}]
})

module.exports = mongoose.model("Users", schema)

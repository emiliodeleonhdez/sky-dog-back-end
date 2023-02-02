const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  dogRace: { type: String, required: true },
  gender: { type: String, required: true },
  isSterilized: { type: Boolean },
  mainCarer: { type: String }
})

module.exports = mongoose.model("Mascots", schema)

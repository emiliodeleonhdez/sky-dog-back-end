const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  qty: { type: Number, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  creationDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Services", schema)

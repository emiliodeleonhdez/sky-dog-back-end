const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  ocupation: { type: String, trim: true, default: "Not defined by user" },
  postalCode: { type: String, trim: true, default: "Not defined by user" },
  problemsDescription: [{ type: String }],
  previousExperience: { type: Boolean, default: false },
  previousExperienceDetail: { type: String, default: "none" },
  services: [{ type: mongoose.ObjectId }],
  mascot: { type: mongoose.ObjectId }
})

module.exports = mongoose.model("Users", schema)

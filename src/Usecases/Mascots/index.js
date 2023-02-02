const Mascot = require("../../Models/Mascots")

const createMascot = async (mascotData) => {
  const mascot = new Mascot(mascotData)
  const saveMascot = await mascot.save()
  return { id: saveMascot.id, name: saveMascot.name }
}

module.exports = {
  createMascot
}

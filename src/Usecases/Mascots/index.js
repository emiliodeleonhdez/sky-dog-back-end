const Mascot = require('../../Models/Mascots');

const createMascot = async (mascotData) => {
    const mascot = new Mascot(mascotData);
    const saveMascot = await mascot.save();
    return { id: saveMascot.id, name: saveMascot.name };
};

const getAllMascots = async () => await Mascot.find({});

const getByQuery = async (queryParams) => {
  const getMascotsByQueryParams = await Mascot.find(queryParams).exec()
  return getMascotsByQueryParams
}

const updateMascot = async (id, update) => {
    const updateMascotById = await Mascot.findByIdAndUpdate(id, update);
    return updateMascotById.id;
};

const deleteMascot = async (id) => {
  const deleteMascotById = await Mascot.findByIdAndDelete(id)
  return deleteMascotById.id
}

module.exports = {
    createMascot,
    getAllMascots,
    updateMascot,
    deleteMascot,
    getByQuery
};

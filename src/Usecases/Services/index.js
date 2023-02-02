const Service = require("../../Models/Services")

const createService = async (serviceData) => {
  const service = new Service(serviceData)
  const saveService = await service.save()
  return { id: saveService.id, name: saveService.name }
}

const getService = async ({}) => {
  return await Service.find({}).exec()
}

const updateService = async (id, update) => {
  const { _id, ...data } = update
  return await Service.findByIdAndUpdate(id, data, { new: true }).exec()
}

const deleteService = async (id) => {
  return await Service.findByIdAndDelete(id).exec()
}

module.exports = {
  createService,
  getService,
  updateService,
  deleteService
}

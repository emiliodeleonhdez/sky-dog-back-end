const Service = require("../../Models/Services")

const createService = async (serviceData) => {
  const service = new Service(serviceData)
  const saveService = await service.save()
  return { id: saveService.id, name: saveService.name }
}

const getService = async ({}) => {
  return await Service.find({}).exec()
}

module.exports = {
  createService,
  getService
}

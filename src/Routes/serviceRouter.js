const express = require("express")
const service = require("../Usecases/Services/")

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const newService = await service.createService(req.body)
    if (!newService) throw new Error("Service was not created")
    res.status(201).json({
      ok: true,
      message: "New Service Created",
      payload: newService
    })
  } catch (error) {
    console.error(error)
  }
})

router.get("/get", async (req, res) => {
  try {
    const allServices = await service.getService({})
    if (!allServices) throw new Error("No services found")
    res.status(200).json({
      ok: true,
      message: "All services",
      payload: allServices
    })
  } catch (error) {
    console.error(error)
  }
})

module.exports = router

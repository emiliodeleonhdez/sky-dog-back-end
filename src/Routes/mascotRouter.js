const express = require("express")
const mascot = require("../Usecases/Mascots/")

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const newMascot = await mascot.createMascot(req.body)
    if (!newMascot) throw new Error("Mascot was not created")
    res.status(201).json({
      ok: true,
      message: "New Mascot Created",
      payload: newMascot
    })
  } catch (error) {
    console.error(error)
  }
})

module.exports = router

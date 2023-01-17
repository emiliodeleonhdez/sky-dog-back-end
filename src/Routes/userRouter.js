const express = require("express")
const user = require("../Usecases/Users/")

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const newUser = await user.createUser(req.body)
    if (!newUser) throw new Error("User was not created")
    res.status(201).json({
      ok: true,
      message: "New User Created",
      payload: newUser
    })
  } catch (error) {
    console.error(error)
  }
})

module.exports = router

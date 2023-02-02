const userRouter = require("./userRouter")
const serviceRouter = require("./serviceRouter")
const mascotRouter = require("./mascotRouter")

const apiRouter = (app) => {
  app.use("/users", userRouter)
  app.use("/services", serviceRouter)
  app.use("/mascots", mascotRouter)
}

module.exports = apiRouter

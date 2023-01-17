const userRouter = require("./userRouter")
const serviceRouter = require("./serviceRouter")

const apiRouter = (app) => {
  app.use("/users", userRouter)
  app.use("/services", serviceRouter)
}

module.exports = apiRouter

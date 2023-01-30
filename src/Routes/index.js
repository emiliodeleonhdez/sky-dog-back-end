const userRouter = require("./userRouter")
const serviceRouter = require("./serviceRouter")
const mascotRouter = require("./mascotRouter")
const paymentsRouter = require("./paymentRouter")

const apiRouter = (app) => {
  app.use("/users", userRouter)
  app.use("/services", serviceRouter)
  app.use("/mascots", mascotRouter)
  app.use("/payments", paymentsRouter)
}

module.exports = apiRouter

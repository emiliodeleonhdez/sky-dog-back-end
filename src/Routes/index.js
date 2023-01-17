const userRouter = require("./userRouter")

const apiRouter = (app) => {
  app.use("/users", userRouter)
}

module.exports = apiRouter

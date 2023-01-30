const express = require("express")
const cors = require("cors")
const app = express()
const db = require("./Lib/db")
const config = require("./Lib/config")
const port = config.PORT
const apiRouter = require("./Routes")

app.use(cors())

app.use(express.json())

app.get("/", (request, response) => {
  response.send("Hello Sky Dog!")
})

apiRouter(app)

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`)
  db.connect()
    .then(() => {
      console.log("Data Base Connection stablished")
    })
    .catch((error) => {
      console.error("Connection refused", error)
    })
})

const express = require("express")
const app = express()
const db = require("./src/Lib/db")
const config = require("./src/Lib/config")
const port = config.PORT
//app.use(cors())

app.use(express.json())

app.get("/", (request, response) => {
  response.send("Hello Sky Dog!")
})

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

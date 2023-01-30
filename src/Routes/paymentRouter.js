const express = require("express")
const router = express.Router()
const axios = require("axios")

const config = require("../Lib/config")
const access_token = "A21AALH4GBivYpxfOxOq03OzMXmgR45uOQlLWnH2VeysQdzkco8v1r109D_DJ0pMIcdXVjQbkRE58E874j11m7Gt4k9PjFqMA"

router.post("/create-order", async (req, res) => {
    const order = req.body
    const response = await axios.post(`${config.PAYPAL_API_URL}/v2/checkout/orders`, order, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    res.json(response.data)
})

module.exports = router
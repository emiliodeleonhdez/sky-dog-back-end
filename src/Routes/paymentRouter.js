const express = require("express")
const payment = require("../Usecases/Payments/")
const router = express.Router()

router.post("/create-order", async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        const createOrder = await payment.createOrder(body)
        console.log(createOrder)
        if(!createOrder) {
            res.status(400)
            throw new Error("Couldn't create payment")
        }
        res.status(200).json({
            ok: true, 
            payload: createOrder
        })
    } catch (error) {
        console.log(error)
    }

})

module.exports = router
const express = require('express');
const router = express.Router();
const config = require("../Lib/config")
const paypal = require("../Usecases/Paypal")

router.post('/create-order', async (req, res) => {
    const order = req.body;
    const newOrder = await paypal.createOrder(order);
    if(!newOrder) throw new Error("Couldn't capture order")
    res.status(200).json({
        message: "Create Order",
        payload: newOrder
    });
});

router.get('/execute-payment', async (req, res) => {
    const token = req.query.token
    const capturePayment = await paypal.executePayment(token)
    if(!capturePayment) {
        res.redirect(`${config.SKY_DOG_FRONT_URL}/notfound`)
        throw new Error("Couldn't capture payment")
    }
    res.redirect(`${config.SKY_DOG_FRONT_URL}/paymentok`)
    res.status(200).json({
        message: "Execute Payment",
        payload: capturePayment
    })
})

router.get("/cancel-payment", async (req, res) => {
    res.redirect(`${config.SKY_DOG_FRONT_URL}`)
})

module.exports = router;

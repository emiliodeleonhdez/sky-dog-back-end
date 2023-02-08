const express = require('express');
const router = express.Router();
const paypal = require("../Usecases/Paypal")

router.post('/create-order', async (req, res) => {
    const order = req.body;
    const newOrder = await paypal.createOrder(order);
    res.status(200).json({
        message: "Created Order",
        payload: newOrder
    });
});

module.exports = router;

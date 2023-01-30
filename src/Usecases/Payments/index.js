const axios = require("axios")
const config = require("../../Lib/config")

const auth = {user: config.PAYPAL_CLIENT, pass: config.PAYPAL_SECRET}

const createPayment = (body) => {
    axios.post(`${config.PAYPAL_API_URL}/v2/checkout/orders`, {
        auth,
        body,
        json: true
    }, (error, response) => {
        if(error) throw new Error(error)
        return response.body
    });
};

module.exports = {
    createPayment
}

const axios = require('axios');
const config = require('../../Lib/config');

const auth = { username: config.PAYPAL_CLIENT, password: config.PAYPAL_SECRET };

const createOrder = async (order) => {
    const response = await axios.post(`${config.PAYPAL_API_URL}/v2/checkout/orders`, order, {
        auth
    });
    return response.data;
};

const executePayment = async (token) => {
    const doPayment = await axios.post(
        `${config.PAYPAL_API_URL}/v2/checkout/orders/${token}/capture`,
        {},
        {
            auth
        }
    );
    return doPayment.data;
};

module.exports = {
    createOrder,
    executePayment
};

const axios = require('axios');
const config = require('../../Lib/config');

const access_token = 'A21AALunz-Ii4r26ch9izq6DxJaq4ejtOT_x3nS67YA4O7cWwLPTjOut6-bHpoDGJGhqbzOn43mybabNJJry6nl6PwlkpA5Lg';

const createOrder = async (order) => {
    const response = await axios.post(`${config.PAYPAL_API_URL}/v2/checkout/orders`, order, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    return response.data;
};

module.exports = {
    createOrder
};

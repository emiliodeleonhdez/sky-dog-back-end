const axios = require('axios');
const config = require('../../Lib/config');

// const auth = { user: config.PAYPAL_CLIENT, pass: config.PAYPAL_SECRET };

const user = "AcSKSDC5NXOTSb5p4ZLSwKkwQEHYbtKyi_N_iKjSzMEvmNDUBPWNWwMSPOB-4Y-uQFohow_aClrvcDrW"
const pass = "EKoY5RwatB0E1W1tcWqtqdSZ-ngc0C1539CPMsknCrdLVG-YYjgyWFmPo8VQGQgb8QkKoWNEc8vlQ5WN"
const url = "https://api-m.sandbox.paypal.com"
// const auth = { user, pass };

const createOrder = async (body) => {
    try {
        const order = await axios.post(`${url}/v2/checkout/orders`, body, {
                auth: {
                    username: user,
                    password: pass
                }
            },
            (error) => {
                if (error) throw new Error(error);
                return order.data;
            }
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createOrder
};

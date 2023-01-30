const axios = require("axios")
const config = require("../../Lib/config")

const order = {
  intent: "CAPTURE",
  purchase_units: [
    {
      amount: {
        currency_code: "USD",
        value: "105.70",
      },
    },
  ],
  application_context: {
    brand_name: "mycompany.com",
    landing_page: "NO_PREFERENCE",
    user_action: "PAY_NOW",
    return_url: `${HOST}/capture-order`,
    cancel_url: `${HOST}/cancel-payment`,
  },
};

const access_token = "A21AALH4GBivYpxfOxOq03OzMXmgR45uOQlLWnH2VeysQdzkco8v1r109D_DJ0pMIcdXVjQbkRE58E874j11m7Gt4k9PjFqMA"

const createOrder = async (req, res) => {
  console.log("run")
    const response = await axios.post(`${config.PAYPAL_API_URL}/v2/checkout/orders`, order, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    res.json(response.data);
};

module.exports = {
  createOrder
}
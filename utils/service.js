const axios = require("axios")
const { v4: uuidv4 } = require('uuid');

// basic xolat uchun

async function smsSend(phone, text) {
    try {
        const response = await axios.post(process.env.Service_URL, {
            messages: [
                {
                    recipient: phone,
                    "message-id": uuidv4(),
                    sms: {
                        originator: process.env.CODE,
                        content: {
                            text
                        }
                    }
                }
            ]
        }, {
            headers: {
                Authorization: "Basic cmV0YWlsYXV0bzpjMio0ejJZQlUoZio=",
                'Content-Type': 'application/json',
            }
        });

        return !!response.data
    }catch (err) {
        console.log(err)
    }
}


module.exports = {
    smsSend
}
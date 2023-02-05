const JWT = require("jsonwebtoken")

module.exports = {
    sign: async (payload) => JWT.sign(payload, process.env.Secret_JWT, { expiresIn: process.env.Token_times }),
    verify: async (payload) => JWT.verify(payload, process.env.Secret_JWT),
};
const Joi = require('joi')

const loginSchema = Joi.object({
  username: Joi.string()
    .trim()
    .min(1)
    .required(),
  password: Joi.string()
    .trim()
    .min(1)
    .required(),
})

module.exports = { loginSchema }
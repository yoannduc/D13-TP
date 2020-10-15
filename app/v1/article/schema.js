const Joi = require('joi')

const createSchema = Joi.object({
  title: Joi.string()
    .pattern(/^[0-z\s]+$/)
    .trim()
    .min(1)
    .required(),
  body: Joi.string()
    .pattern(/^[0-z\s]+$/)
    .trim()
    .min(1)
    .required(),
})

const updateSchema = Joi.object({
  title: Joi.string()
    .pattern(/^[0-z\s]+$/)
    .trim()
    .min(1),
    // .when('body', { not: Joi.exist(), then: Joi.required() }),
  body: Joi.string()
    .pattern(/^[0-z\s]+$/)
    .trim()
    .min(1),
    // .when('title', { not: Joi.exist(), then: Joi.required() }),
}).or('title', 'body')

module.exports = { createSchema, updateSchema }

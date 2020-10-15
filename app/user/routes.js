const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const R = require('ramda')
const {to} = require('await-to-js')

const db = require.main.require('./helpers/db.js')
const logger = require.main.require('./helpers/logger.js')
const { loginSchema } = require('./schema.js')

router.post('/login', async (req, res) => {
    const error = 'Username or password not recognized'

    const { error: schemaErr, value: body } = loginSchema.validate(req.body)
    if (!R.isNil(schemaErr)) {
        const error = `Error in input (err: ${schemaErr})`
        logger.error(error)
        return res.status(400).json({ error })
      }
    
      const [userErr, user] = await to(db('appuser').select('password').where({username: body.username}))
      if (!R.isNil(userErr)) {
        logger.error(`${userErr}`)
        return res.status(500).json({ error: `${userErr}` })
      }

      if (!user.length) {
        logger.error(`${error}`)
        return res.status(401).json({ error })
      }

      const [pwdDecodeErr, pwdDecode] = await to(bcrypt.compare(body.password, user[0].password))
      if (!R.isNil(pwdDecodeErr)) {
        logger.error(`${pwdDecodeErr}`)
        return res.status(500).json({ error: `${pwdDecodeErr}` })
      }

      if (!pwdDecode) {
        logger.error(`${error}`)
        return res.status(401).json({ error })
      }

      return res.status(200).json({jwt: jwt.sign({ username: body.username }, process.env.API_SECRET)})
})

module.exports = router
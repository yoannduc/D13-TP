const R = require('ramda')
const jwt = require('jsonwebtoken')
const {to} = require('await-to-js')

const logger = require.main.require('./helpers/logger.js')
const db = require.main.require('./helpers/db.js')

module.exports = async (req, res, next) => {
    const {authorization: authHeader} = req.headers

    if (R.isNil(authHeader)) {
        const error = 'No header found'
        logger.error(error)
        return res.status(401).json({error})
    }

    const decodedToken = R.tryCatch(token => jwt.verify(token, process.env.API_SECRET), err => err)(authHeader)

    if (decodedToken instanceof Error) {
        const error = `Token decoding errored (err: ${decodedToken})`
        logger.error(error)
        return res.status(401).json({error})
    }

    const [userErr, user] = await to(db('appuser').select([{isAdmin: 'is_admin'}, 'id']).where({username: decodedToken.username}))
    if (!R.isNil(userErr)) {
        logger.error(`${userErr}`)
        return res.status(500).json({ error: `${userErr}` })
    }

    if (!user.length) {
        const error = 'No user found corresponding given token'
        logger.error(error)
        return res.status(401).json({error})
    }

    req.user = {...decodedToken, ...user[0]}

    return next()
}

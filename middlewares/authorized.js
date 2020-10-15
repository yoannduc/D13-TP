const logger = require.main.require('./helpers/logger.js')

module.exports = async (req, res, next) => {
    if (!req.user.isAdmin) {
        const error = 'You must be admin to do that'
        logger.error(error)
        return res.status(403).json({error})
    }

    return next()
}
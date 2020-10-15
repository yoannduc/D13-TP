const router = require('express').Router()

// User routes
router.use('/user', require('./user/routes.js'))

// V1 routes
router.use('/v1', require('./v1/routes.js'))

module.exports = router

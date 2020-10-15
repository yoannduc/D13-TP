const router = require('express').Router()

const controller = require('./controller.js')

const authenticatedMiddleware = require.main.require('./middlewares/authenticated.js')
const authorizedMiddleware = require.main.require('./middlewares/authorized.js')

router.delete('/:id', authenticatedMiddleware, authorizedMiddleware, controller.deleteComment)

module.exports = router

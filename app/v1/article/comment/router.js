const router = require('express').Router()

const controller = require('./controller.js')

const authenticatedMiddleware = require.main.require('./middlewares/authenticated.js')

// Express does not resolve params with use so we have to explicitly tell the full route here
const baseRoute = '/:articleId/comment'

router.get(`${baseRoute}/`, controller.getAll)
router.post(`${baseRoute}/`, authenticatedMiddleware, controller.createComment)

module.exports = router

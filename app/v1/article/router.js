const router = require('express').Router()

const controller = require('./controller.js')
const commentRouter = require('./comment/router.js')

const authenticatedMiddleware = require.main.require('./middlewares/authenticated.js')
const authorizedMiddleware = require.main.require('./middlewares/authorized.js')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', authenticatedMiddleware, controller.createArticle)
router.put('/:id', authenticatedMiddleware, controller.updateArticle)
router.delete('/:id', authenticatedMiddleware, authorizedMiddleware, controller.deleteArticle)
router.use(commentRouter)

module.exports = router

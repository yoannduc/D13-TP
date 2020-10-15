const router = require('express').Router()

router.use('/article', require('./article/router.js'))
router.use('/comment', require('./comment/router.js'))

module.exports = router

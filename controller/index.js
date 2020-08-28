const router = require('express').Router()

router.use('/api', require('./burger_controllers.js'))
router.use('/', require('./viewController.js'))

module.exports = router
const express = require('express')
const router = express.Router()
const newControllers= require('../app/controllers/NewsControlles')

router.use('/:slug', newControllers.show)
router.use('/', newControllers.index)

module.exports = router
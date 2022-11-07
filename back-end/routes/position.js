const express = require('express')
const controller = require('../controllers/position')
const router = express.Router()

router.get('/:categoryId', controller.getPositionById)

router.delete('/:id', controller.deletePosition)

router.post('/', controller.createPosition)

router.patch('/:id', controller.updatePosition)

module.exports = router

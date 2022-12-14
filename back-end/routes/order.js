const express = require('express')
const controller = require('../controllers/order')
const router = express.Router()

router.get('/', controller.getAllOrders)

router.post('/', controller.createOrder)

module.exports = router

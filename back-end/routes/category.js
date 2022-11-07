const express = require('express')
const controller = require('../controllers/category')
const router = express.Router()

router.get('/', controller.getAllCategory)

router.get('/:id', controller.getCategoryById)

router.delete('/:id', controller.deleteCategory)

router.post('/', controller.createCategory)

router.patch('/:id', controller.updateCategory)

module.exports = router

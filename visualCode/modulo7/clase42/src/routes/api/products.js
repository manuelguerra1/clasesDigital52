const express = require('express')
const router = express.Router()
const productsAPIController = require('../../controllers/api/productsAPIController')

router.get('/', productsAPIController.list)

// vamos a crear un producto
router.post('/create', productsAPIController.create)

module.exports = router
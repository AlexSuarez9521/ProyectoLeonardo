const router = require('express').Router()
const pedidosController = require('../controllers/pedidosController')

router.get('/:id', pedidosController.ListarCartaPorCategoria)

module.exports = router
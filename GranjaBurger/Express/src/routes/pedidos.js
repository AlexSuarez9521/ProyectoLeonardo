const router = require('express').Router()
const pedidosController = require('../controllers/pedidosController')

/* ff */
router.get('/:id', pedidosController.ListarCartaPorCategoria)

module.exports = router
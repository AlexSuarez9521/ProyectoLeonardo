const router = require('express').Router()
const pedidosController = require('../controllers/pedidosController')

/* ddddd */
router.get('/:id', pedidosController.ListarCartaPorCategoria)

module.exports = router
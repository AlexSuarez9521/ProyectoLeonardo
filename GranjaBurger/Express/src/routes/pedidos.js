const router = require('express').Router()
const pedidosController = require('../controllers/pedidosController')

router.get('/:id', pedidosController.ListarCartaPorCategoria)
router.get('/comida/:id', pedidosController.ConsultarComida)

module.exports = router
const router = require('express').Router();
const cestaController = require('../controllers/CestaController')

// CONSULTAR CESTA DEL USUARIO
router.get('/:id', cestaController.ConsultarCestaPorUsuario);

// AGREGAR PRODUCTO A LA CESTA 
router.post('/', cestaController.AgregarProductoCesta);

// ELIMINAR PRODUCTO
router.delete('/:id', cestaController.EliminarProductoCesta);

module.exports = router;
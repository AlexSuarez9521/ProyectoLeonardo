const router = require('express').Router();
const politicasController = require('../controllers/PoliticasController')

// CONSULTAR TODOS LOS POLITICAS
router.get('/', politicasController.ListarPoliticas);

router.get('/:id', politicasController.ListarPolitica);

// AGREGAR POLITICA
router.post('/', politicasController.AgregarPolitica);

// ELIMINAR POLITICA
router.delete('/:id', politicasController.EliminarPolitica);

// MODIFICAR POLITICA
router.put('/:id', politicasController.ModificarPolitica);

module.exports = router;
const router = require('express').Router();
const galeriaController = require('../controllers/GaleriaController')

// CONSULTAR IMAGENES
router.get('/', galeriaController.ListarGaleria);

router.get('/:id', galeriaController.ListarImagen);

// AGREGAR IMAGEN
router.post('/', galeriaController.AgregarImagen);

// ELIMINAR IMAGEN
router.delete('/:id', galeriaController.EliminarImagen);

// MODIFICAR IMAGEN
router.put('/:id', galeriaController.ModificarImagen);

module.exports = router;
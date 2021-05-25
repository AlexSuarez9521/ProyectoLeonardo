const router = require('express').Router();
const contactoController = require('../controllers/ContactoController')

// CONSULTAR TODOS LOS CONTACTOS
router.get('/', contactoController.ListarContactos);

// CONSULTAR UN CONTACTO
router.get('/:id', contactoController.ListarContacto);

// AGREGAR CONTACTO
router.post('/', contactoController.AgregarContacto);

// ELIMINAR CONTACTO
router.delete('/:id', contactoController.EliminarContacto);

// MODIFICAR CONTACTO
router.put('/:id', contactoController.ModificarContacto);

module.exports = router;
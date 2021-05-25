const router = require('express').Router();
const usersController = require('../controllers/UsersController')

// CONSULTAR TODOS LOS USUARIOS



router.get('/', usersController.ListarUsuarios);

// CONSULTAR UN USUARIO


router.get('/:id', usersController.ConsultarUsuario);

// AGREGAR USUARIO


router.post('/', usersController.AgregarUsuario);

// ELIMINAR USUARIO


router.delete('/:id', usersController.EliminarUsuario);

// MODIFICAR USUARIO


router.put('/:id', usersController.ModificarUsuario);

router.post('/login', usersController.Login)

module.exports = router;
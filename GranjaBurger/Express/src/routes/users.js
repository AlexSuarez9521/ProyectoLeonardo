const router = require('express').Router()
const usersController = require('../controllers/usersController')

router.get('/', usersController.ListarUsuarios)

router.post('/login', usersController.Loguearse)
router.post('/register', usersController.Registrarse)

module.exports = router
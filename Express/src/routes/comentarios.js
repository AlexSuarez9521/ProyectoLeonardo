const router = require('express').Router();
const comentariosController = require('../controllers/ComentariosController')

// CONSULTAR COMENTARIOS POR PRODUCTO

router.get('/producto/:id', comentariosController.ListarComentariosPorProducto);


router.get('/:id', comentariosController.ListarComentario);

// AGREGAR COMENTARIOS
router.post('/', comentariosController.AgregarComentario);

// ELIMINAR COMENTARIOS
router.delete('/:id', comentariosController.EliminarComentario);


// LISTE TODOS LOS COMENTARIOS EN EL ADMIN
router.get('/', comentariosController.ListarComentariosAdmin);

router.put('/:id', comentariosController.ModificarComentario)

module.exports = router;
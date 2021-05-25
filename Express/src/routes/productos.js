const router = require('express').Router();
const productosController = require('../controllers/ProductosController')

// CONSULTAR TODOS LOS PRODUCTOS
router.get('/', productosController.ListarProductos);

// CONSULTAR UN PRODUCTO
router.get('/:id', productosController.ConsultarProducto);

// AGREGAR PRODUCTO
router.post('/', productosController.AgregarProducto);

// ACTUALIZAR STOCK DEL PRODUCTO
router.put('/stock/:id', productosController.ActualizarStock);

// ELIMINAR PRODUCTO
router.delete('/:id', productosController.EliminarProducto);

// MODIFICAR PRODUCTO
router.put('/:id', productosController.ModificarProducto);

module.exports = router;
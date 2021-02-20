const router = require('express').Router();
const database = require('../database');

// CONSULTAR TODOS LOS PRODUCTOS
router.get('/', async (req, res) => {
    const productos = await database.query("SELECT * FROM productos");
    res.json({ productos })
});

// CONSULTAR UN PRODUCTO
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const producto = await database.query("SELECT * FROM productos WHERE id_producto = ?", [id]);
    res.json({ producto })
});

// AGREGAR PRODUCTO
router.post('/', async (req, res) => {
    const { nombre, stock, precio } = req.body;
    const datos = [nombre, stock, precio];
    await database.query("INSERT INTO productos(nombre,stock,precio) VALUES(?,?,?)", datos);
    res.json({ msg: "producto agregado" });
});

// ELIMINAR PRODUCTO
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM productos WHERE id_producto = ?", [id]);
    res.json({ msg: "producto eliminado" });
});

// MODIFICAR PRODUCTO
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, stock, precio } = req.body;
    const datos = [nombre, stock, precio, id];
    await database.query("UPDATE productos SET nombre = ?, stock = ?, precio = ? WHERE id_producto = ?", datos);
    res.json({ msg: "producto modificado" });
});

module.exports = router;
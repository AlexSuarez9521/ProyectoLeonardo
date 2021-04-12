const router = require('express').Router();
const database = require('../database');

// CONSULTAR CESTA DEL USUARIO
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const cesta = await database.query("SELECT c.id_cesta, p.nombre, c.cantidad, c.precio, c.fecha_inicio, c.fecha_final FROM cesta c, usuarios u, productos p WHERE c.id_producto = p.id_producto AND u.id_usuario = ?", [id]);
    res.json({ cesta });
});

// AGREGAR PRODUCTO A LA CESTA 
router.post('/', async (req, res) => {
    const { id_usuario, id_producto, cantidad, precio, fecha_inicio, fecha_final, fecha_renta } = req.body;
    const datos = [id_usuario, id_producto, cantidad, precio, fecha_inicio, fecha_final, fecha_renta];
    await database.query("INSERT INTO cesta(id_usuario,id_producto,cantidad,precio,fecha_inicio,fecha_final,fecha_renta) VALUES(?,?,?,?,?,?,?)", datos);
    res.json({ msg: "producto agregado a la cesta" });
});

// ELIMINAR PRODUCTO
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM cesta WHERE id_cesta = ?", [id]);
    res.json({ msg: "producto eliminado a la cesta" });
});

module.exports = router;
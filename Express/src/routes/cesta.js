const router = require('express').Router();
const database = require('../database');

// CONSULTAR CESTA DEL USUARIO
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const cesta = await database.query("SELECT * FROM cesta WHERE id_usuario = ?", [id]);
    res.json({ cesta });
});

// AGREGAR PRODUCTO A LA CESTA 
router.post('/', async (req, res) => {
    const { id_usuario, id_producto, cantidad, precio } = req.body;
    const datos = [id_usuario, id_producto, cantidad, precio];
    await database.query("INSERT INTO cesta(id_usuario,id_producto,cantidad,precio) VALUES(?,?,?,?)", datos);
    res.json({ msg: "producto agregado a la cesta" });
});

// ELIMINAR PRODUCTO
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM cesta WHERE id_cesta = ?", [id]);
    res.json({ msg: "producto eliminado a la cesta" });
});

module.exports = router;
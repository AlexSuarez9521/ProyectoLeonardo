const router = require('express').Router();
const database = require('../database');

// CONSULTAR COMENTARIOS POR PRODUCTO
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const comentarios = await database.query("SELECT * FROM comentarios WHERE id_producto = ?", [id]);
    res.json({ comentarios })
});

// AGREGAR COMENTARIOS
router.post('/', async (req, res) => {
    const { id_producto, descripcion } = req.body;
    const datos = [id_producto, descripcion];
    await database.query("INSERT INTO comentarios(id_producto,descripcion) VALUES(?,?)", datos);
    res.json({ msg: "comentario agregado" });
});

// ELIMINAR COMENTARIOS
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM comentarios WHERE id_comentario = ?", [id]);
    res.json({ msg: "comentario eliminado" });
});

module.exports = router;
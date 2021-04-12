const router = require('express').Router();
const database = require('../database');

// CONSULTAR COMENTARIOS POR PRODUCTO

router.get('/producto/:id', async (req, res) => {
    const { id } = req.params;
    const comentarios = await database.query("SELECT * FROM comentarios WHERE id_producto = ?", [id]);
    res.json({ comentarios })
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const comentario = await database.query("SELECT c.id_comentario, p.nombre, c.descripcion FROM comentarios c, productos p WHERE c.id_producto = p.id_producto AND id_comentario = ?", [id]);
    res.json({ comentario })
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


// LISTE TODOS LOS COMENTARIOS EN EL ADMIN
router.get('/', async (req, res) => {
    const comentarios = await database.query("SELECT c.id_comentario, p.nombre, c.descripcion, p.id_producto FROM comentarios c, productos p WHERE c.id_producto = p.id_producto");
    res.json({ comentarios })
});

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { id_producto, descripcion } = req.body
    const datos = [id_producto, descripcion, id]
    await database.query("UPDATE comentarios SET id_producto = ?, descripcion = ? WHERE id_comentario = ?", datos)
    res.json({ msg: "comentario modificado" })
})

module.exports = router;
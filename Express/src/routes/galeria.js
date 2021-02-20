const router = require('express').Router();
const database = require('../database');

// CONSULTAR IMAGENES
router.get('/', async (req, res) => {
    const imagenes = await database.query("SELECT * FROM galeria");
    res.json({ imagenes })
});

// AGREGAR IMAGEN
router.post('/', async (req, res) => {
    const { imagen } = req.body;
    const datos = [imagen];
    await database.query("INSERT INTO galeria(imagen) VALUES(?)", datos);
    res.json({ msg: "imagen agregado" });
});

// ELIMINAR IMAGEN
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM galeria WHERE id_galeria = ?", [id]);
    res.json({ msg: "imagen eliminado" });
});

// MODIFICAR IMAGEN
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { imagen } = req.body;
    const datos = [imagen, id];
    await database.query("UPDATE galeria SET imagen = ? WHERE id_galeria = ?", datos);
    res.json({ msg: "imagen modificado" });
});

module.exports = router;
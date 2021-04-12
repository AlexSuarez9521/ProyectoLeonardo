const router = require('express').Router();
const database = require('../database');

// CONSULTAR TODOS LOS POLITICAS
router.get('/', async (req, res) => {
    const politicas = await database.query("SELECT * FROM terminos_condiciones");
    res.json({ politicas })
});

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const politicas = await database.query("SELECT * FROM terminos_condiciones WHERE id_terminos_condiciones = ?", [id]);
    res.json({ politicas })
});

// AGREGAR POLITICA
router.post('/', async (req, res) => {
    const { descripcion } = req.body;
    const datos = [descripcion];
    await database.query("INSERT INTO terminos_condiciones(descripcion) VALUES(?)", datos);
    res.json({ msg: "politica agregado" });
});

// ELIMINAR POLITICA
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM terminos_condiciones WHERE id_terminos_condiciones = ?", [id]);
    res.json({ msg: "politica eliminado" });
});

// MODIFICAR POLITICA
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    const datos = [descripcion, id];
    await database.query("UPDATE terminos_condiciones SET descripcion = ? WHERE id_terminos_condiciones = ?", datos);
    res.json({ msg: "politica modificado" });
});

module.exports = router;
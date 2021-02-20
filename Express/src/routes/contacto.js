const router = require('express').Router();
const database = require('../database');

// CONSULTAR TODOS LOS CONTACTOS
router.get('/', async (req, res) => {
    const contactos = await database.query("SELECT * FROM formulario_contacto");
    res.json({ contactos })
});

// CONSULTAR UN CONTACTO
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const contacto = await database.query("SELECT * FROM formulario_contacto WHERE id_formulario_contacto = ?", [id]);
    res.json({ contacto })
});

// AGREGAR CONTACTO
router.post('/', async (req, res) => {
    const { correo, mensaje } = req.body;
    const datos = [correo, mensaje];
    await database.query("INSERT INTO formulario_contacto(correo,mensaje) VALUES(?,?)", datos);
    res.json({ msg: "contacto agregado" });
});

// ELIMINAR CONTACTO
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM formulario_contacto WHERE id_formulario_contacto = ?", [id]);
    res.json({ msg: "contacto eliminado" });
});

// MODIFICAR CONTACTO
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { correo, mensaje } = req.body;
    const datos = [correo, mensaje, id];
    await database.query("UPDATE formulario_contacto SET correo = ?, mensaje = ? WHERE id_formulario_contacto = ?", datos);
    res.json({ msg: "contacto modificado" });
});

module.exports = router;
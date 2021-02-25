const router = require('express').Router();
const database = require('../database');

// CONSULTAR TODOS LOS USUARIOS



router.get('/', async (req, res) => {
    const usuarios = await database.query("SELECT * FROM usuarios");
    res.json({ usuarios })
});

// CONSULTAR UN USUARIO


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const usuario = await database.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id]);
    res.json({ usuario })
});

// AGREGAR USUARIO


router.post('/', async (req, res) => {
    const { nombre, cedula, telefono, contra, id_rol } = req.body;
    const datos = [nombre, cedula, telefono, contra, id_rol];
    await database.query("INSERT INTO usuarios(nombre,cedula,telefono,contra,id_rol) VALUES(?,?,?,?,?)", datos);
    res.json({ msg: "usuario agregado" });
});

// ELIMINAR USUARIO


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM usuarios WHERE id_usuario = ?", [id]);
    res.json({ msg: "usuario eliminado" });
});

// MODIFICAR USUARIO


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, telefono, contra, id_rol } = req.body;
    const datos = [nombre, cedula, telefono, contra, id_rol, id];
    await database.query("UPDATE usuarios SET nombre = ?, cedula = ?, telefono = ?, contra = ?, id_rol = ? WHERE id_usuario = ?", datos);
    res.json({ msg: "usuario modificado" });
});

module.exports = router;
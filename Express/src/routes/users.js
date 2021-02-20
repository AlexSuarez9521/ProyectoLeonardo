const router = require('express').Router();
const database = require('../database');

// CONSULTAR TODOS LOS USUARIOS

// GET /localhost:3000/user/

router.get('/', async (req, res) => {
    const usuarios = await database.query("SELECT * FROM usuarios");
    res.json({ usuarios })
});

// CONSULTAR UN USUARIO

// GET /localhost:3000/user/2
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const usuario = await database.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id]);
    res.json({ usuario })
});

// AGREGAR USUARIO

// POST /localhost:3000/user/
// Header: Content-Type: Application/json
/* Body - raw { 

}
*/
router.post('/', async (req, res) => {
    const { nombre, cedula, telefono, contra, id_rol } = req.body;
    const datos = [nombre, cedula, telefono, contra, id_rol];
    await database.query("INSERT INTO usuarios(nombre,cedula,telefono,contra,id_rol) VALUES(?,?,?,?,?)", datos);
    res.json({ msg: "usuario agregado" });
});

// ELIMINAR USUARIO

// DELETE localhost:3000/user/3

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM usuarios WHERE id_usuario = ?", [id]);
    res.json({ msg: "usuario eliminado" });
});

// MODIFICAR USUARIO

// PUT localhost:3000/user/3

// Header: Content-Type: Application/json
/* Body - raw { 

}
*/
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, telefono, contra, id_rol } = req.body;
    const datos = [nombre, cedula, telefono, contra, id_rol, id];
    await database.query("UPDATE usuarios SET nombre = ?, cedula = ?, telefono = ?, contra = ?, id_rol = ? WHERE id_usuario = ?", datos);
    res.json({ msg: "usuario modificado" });
});

module.exports = router;
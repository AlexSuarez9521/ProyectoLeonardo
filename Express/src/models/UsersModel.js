const database = require('../database')

exports.ListarUsuarios = async () => {
    return await database.query(`
    SELECT u.id_usuario, u.nombre, u.cedula, u.telefono, u.contra, r.descripcion, u.id_rol
    FROM usuarios u, roles r
    WHERE u.id_rol = r.id_rol
    `);
}

exports.ConsultarUsuario = async (params) => {
    const { id } = params;
    return await database.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id]);
}

exports.AgregarUsuario = async (body) => {
    const { nombre, cedula, telefono, contra, id_rol } = body;
    const datos = [nombre, cedula, telefono, contra, id_rol];
    return await database.query("INSERT INTO usuarios(nombre,cedula,telefono,contra,id_rol) VALUES(?,?,?,?,?)", datos);
}

exports.EliminarUsuario = async (params) => {
    const { id } = params;
    return await database.query("DELETE FROM usuarios WHERE id_usuario = ?", [id]);
}

exports.ModificarUsuario = async (params, body) => {
    const { id } = params;
    const { nombre, cedula, telefono, contra, id_rol } = body;
    const datos = [nombre, cedula, telefono, contra, id_rol, id];
    return await database.query("UPDATE usuarios SET nombre = ?, cedula = ?, telefono = ?, contra = ?, id_rol = ? WHERE id_usuario = ?", datos);
}

exports.Login = async (body) => {
    const { nombre, contra } = body;
    const datos = [nombre, contra]
    return await database.query("SELECT * FROM usuarios WHERE nombre = ? AND contra = ?", datos)
}
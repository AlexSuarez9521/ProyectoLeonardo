const database = require('../database')

exports.ListarContactos = async () => {
    return await database.query("SELECT * FROM formulario_contacto");
}

exports.ListarContacto = async (params) => {
    const { id } = params;
    return await database.query("SELECT * FROM formulario_contacto WHERE id_formulario_contacto = ?", [id]);
}

exports.AgregarContacto = async (body) => {
    const { correo, mensaje } = body;
    const datos = [correo, mensaje];
    return await database.query("INSERT INTO formulario_contacto(correo,mensaje) VALUES(?,?)", datos);
}

exports.EliminarContacto = async (params) => {
    const { id } = params;
    return await database.query("DELETE FROM formulario_contacto WHERE id_formulario_contacto = ?", [id]);
}

exports.ModificarContacto = async (params, body) => {
    const { id } = params;
    const { correo, mensaje } = body;
    const datos = [correo, mensaje, id];
    return await database.query("UPDATE formulario_contacto SET correo = ?, mensaje = ? WHERE id_formulario_contacto = ?", datos);
}
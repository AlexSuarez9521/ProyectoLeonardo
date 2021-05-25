const database = require('../database')

exports.ListarPoliticas = async () => {
    return await database.query("SELECT * FROM terminos_condiciones");
}

exports.ListarPolitica = async (params) => {
    const { id } = params
    return await database.query("SELECT * FROM terminos_condiciones WHERE id_terminos_condiciones = ?", [id]);
}

exports.AgregarPolitica = async (body) => {
    const { descripcion } = body;
    const datos = [descripcion];
    return await database.query("INSERT INTO terminos_condiciones(descripcion) VALUES(?)", datos);
}

exports.EliminarPolitica = async (params) => {
    const { id } = params;
    return await database.query("DELETE FROM terminos_condiciones WHERE id_terminos_condiciones = ?", [id]);
}

exports.ModificarPolitica = async (params, body) => {
    const { id } = params;
    const { descripcion } = body;
    const datos = [descripcion, id];
    return await database.query("UPDATE terminos_condiciones SET descripcion = ? WHERE id_terminos_condiciones = ?", datos);
}
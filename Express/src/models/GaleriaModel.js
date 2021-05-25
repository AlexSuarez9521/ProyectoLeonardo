const database = require('../database')

exports.ListarGaleria = async () => {
    return await await database.query("SELECT * FROM galeria");
}

exports.ListarImagen = async (params) => {
    const { id } = params
    return await database.query("SELECT * FROM galeria WHERE id_galeria = ?", [id]);
}

exports.AgregarImagen = async (body) => {
    const { imagen } = body;
    const datos = [imagen];
    return await database.query("INSERT INTO galeria(imagen) VALUES(?)", datos);
}

exports.EliminarImagen = async (params) => {
    const { id } = params;
    return await database.query("DELETE FROM galeria WHERE id_galeria = ?", [id]);
}

exports.ModificarImagen = async (params, body) => {
    const { id } = params;
    const { imagen } = body;
    const datos = [imagen, id];
    return await database.query("UPDATE galeria SET imagen = ? WHERE id_galeria = ?", datos);
}
const database = require('../database')

exports.ListarComentariosPorProducto = async (params) => {
    const { id } = params;
    return await database.query("SELECT * FROM comentarios WHERE id_producto = ?", [id]);
}

exports.ListarComentario = async (params) => {
    const { id } = params;
    return await database.query("SELECT c.id_comentario, p.nombre, c.descripcion FROM comentarios c, productos p WHERE c.id_producto = p.id_producto AND id_comentario = ?", [id]);
}

exports.AgregarComentario = async (body) => {
    const { id_producto, descripcion } = body;
    const datos = [id_producto, descripcion];
    return await database.query("INSERT INTO comentarios(id_producto,descripcion) VALUES(?,?)", datos);
}

exports.EliminarComentario = async (params) => {
    const { id } = params;
    return await database.query("DELETE FROM comentarios WHERE id_comentario = ?", [id]);
}

exports.ListarComentariosAdmin = async () => {
    return await database.query("SELECT c.id_comentario, p.nombre, c.descripcion, p.id_producto FROM comentarios c, productos p WHERE c.id_producto = p.id_producto");
}

exports.ModificarComentario = async (params, body) => {
    const { id } = params
    const { id_producto, descripcion } = body
    const datos = [id_producto, descripcion, id]
    return await database.query("UPDATE comentarios SET id_producto = ?, descripcion = ? WHERE id_comentario = ?", datos)
}
const database = require('../database')

exports.ConsultarCestaPorUsuario = async (params) => {
    const { id } = params;
    return await database.query("SELECT c.id_cesta, p.nombre, c.cantidad, c.precio, c.fecha_inicio, c.fecha_final FROM cesta c, usuarios u, productos p WHERE c.id_producto = p.id_producto AND u.id_usuario = ?", [id]);
}

exports.AgregarProductoCesta = async (body) => {
    const { id_usuario, id_producto, cantidad, precio, fecha_inicio, fecha_final, fecha_renta } = req.body;
    const datos = [id_usuario, id_producto, cantidad, precio, fecha_inicio, fecha_final, fecha_renta];
    return await database.query("INSERT INTO cesta(id_usuario,id_producto,cantidad,precio,fecha_inicio,fecha_final,fecha_renta) VALUES(?,?,?,?,?,?,?)", datos);
}

exports.EliminarProductoCesta = async (params) => {
    const { id } = params;
    return await database.query("DELETE FROM cesta WHERE id_cesta = ?", [id]);
}
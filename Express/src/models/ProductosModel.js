const database = require('../database')

exports.ListarProductos = async () => {
    return await database.query("SELECT * FROM productos");
}

exports.ConsultarProducto = async (params) => {
    const { id } = params;
    return await database.query("SELECT * FROM productos WHERE id_producto = ?", [id]);
}

exports.AgregarProducto = async (body) => {
    const { nombre, stock, precio } = body;
    const datos = [nombre, stock, precio];
    return await database.query("INSERT INTO productos(nombre,stock,precio) VALUES(?,?,?)", datos);
}

exports.ActualizarStock = async (params, body) => {
    const { id } = params
    const { stock } = body;
    const stock_actual = await database.query("SELECT stock FROM productos WHERE id_producto = ?", [id])
    const datos = [parseInt(stock_actual[0].stock + parseInt(stock)), id];
    return await database.query("UPDATE productos SET stock = ? WHERE id_producto = ?", datos)
}

exports.EliminarProducto = async (params) => {
    const { id } = params;
    return await database.query("DELETE FROM productos WHERE id_producto = ?", [id]);
}

exports.ModificarProducto = async (params, body) => {
    const { id } = params;
    const { nombre, stock, precio } = body;
    const datos = [nombre, stock, precio, id];
    return await database.query("UPDATE productos SET nombre = ?, stock = ?, precio = ? WHERE id_producto = ?", datos);
}


const database = require('../database')

exports.ListarCartaPorCategoria = async (params) => {
    const { id } = params
    return await database.query("SELECT * FROM carta WHERE id_categoria = ?", [id])
}

exports.ConsultarComida = async (params) => {
    const { id } = params
    return await database.query("SELECT * FROM carta WHERE id_carta = ?", [id])
}

exports.ListarPedido = async () => {
    return await database.query("SELECT * FROM pedidos")
}

exports.AgregarComidaAlPedido = async (body) => {
    const { notas, imagen, cantidad, precio } = body
    return await database.query("INSERT INTO pedidos(notas,imagen,cantidad,precio) VALUES (?,?,?,?)", [notas, imagen, cantidad, precio])
}
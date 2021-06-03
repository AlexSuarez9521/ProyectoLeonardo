const database = require('../database')

exports.ListarCartaPorCategoria = async (params) => {
    const { id } = params
    return await database.query("SELECT * FROM carta WHERE id_categoria = ?", [id])
}

exports.ConsultarComida = async (params) => {
    const { id } = params
    return await database.query("SELECT * FROM carta WHERE id_carta = ?", [id])
}
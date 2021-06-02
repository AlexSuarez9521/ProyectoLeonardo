const database = require('../database')

exports.ListarUsuarios = async () => {
    let sql = "SELECT * FROM usuarios"
    return await database.query(sql)
}

exports.Loguearse = async (body) => {
    const { correo, password } = body
    let sql = "SELECT * FROM usuarios WHERE correo = ? AND password = ?"
    return await database.query(sql, [correo, password])
}

exports.Registrarse = async (body) => {
    const { nombre, correo, password } = body
    let sql = "INSERT INTO usuarios(nombre,correo,password) VALUES (?,?,?)"
    return await database.query(sql, [nombre, correo, password])
}
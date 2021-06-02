const usersModel = require('../models/usersModel')

exports.ListarUsuarios = async (req,res) => {
    try {
        const usuarios = await usersModel.ListarUsuarios()
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(401).json({ error })
    }
}

exports.Loguearse = async (req,res) => {
    try {
        const usuario = await usersModel.Loguearse(req.body)
        res.status(200).json(usuario)
    } catch (error) {
        res.status(401).json({ error })
    }
}

exports.Registrarse = async (req,res) => {
    try {
       await usersModel.Registrarse(req.body) 
       res.status(200).json({ mensaje: "Usuario registrado" })
    } catch (error) {
        res.status(401).json({ error })
    }
}
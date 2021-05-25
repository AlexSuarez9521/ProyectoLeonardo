const usersModel = require('../models/UsersModel')

exports.ListarUsuarios = async (req,res) => {
    try {
        const usuarios = await usersModel.ListarUsuarios() 
        res.status(200).json({ usuarios })
    } catch (error) {
        res.status(401).json({ err:error })
    }
}

exports.ConsultarUsuario = async (req,res) => {
   try {
       const usuario = await usersModel.ConsultarUsuario(req.params)
       res.status(200).json({ usuario })
   } catch (error) {
       res.status(401).json({ err:error })
   }
}

exports.AgregarUsuario = async (req,res) => {
    try {
        await usersModel.AgregarUsuario(req.body)
        res.status(200).json({ msg: "usuario agregado" })
    } catch (error) {
        res.status(401).json({ err:error })
    }
}

exports.EliminarUsuario = async (req,res) => {
   try {
       await usersModel.EliminarUsuario(req.params)
       res.status(200).json({ msg: "usuario eliminado" })
   } catch (error) {
       res.status(401).json({ err:error })
   }
}

exports.ModificarUsuario = async (req,res) => {
    try {
        await usersModel.ModificarUsuario(req.params, req.body)
        res.status(200).json({ msg: "usuario modificado" })
    } catch (error) {
        res.status(401).json({ err:error })
    }
}

exports.Login = async (req,res) => {
    try {
        const usuario = await usersModel.Login(req.body)
        res.status(200).json({ usuario })
    } catch (error) {
        res.status(401).json({ err:error })
    }
}
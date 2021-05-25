const politicasModel = require('../models/PoliticasModel')

exports.ListarPoliticas = async (req,res) => {
    try {
        const politicas = await politicasModel.ListarPoliticas()
        res.status(200).json({ politicas })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ListarPolitica = async (req,res) => {
   try {
       const politicas = await politicasModel.ListarPolitica(req.params)
       res.status(200).json({ politicas })
   } catch (error) {
       res.status(401).json({ err: error })
   }
}

exports.AgregarPolitica = async (req,res) => {
    try {
        await politicasModel.AgregarPolitica(req.body)
        res.status(200).json({ msg: "politicas agregada" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.EliminarPolitica = async (req,res) => {
    try {
        await politicasModel.EliminarPolitica(req.params)
        res.status(200).json({ msg: "politica eliminada" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ModificarPolitica = async (req,res) => {
    try {
        await politicasModel.ModificarPolitica(req.params, req.body)
        res.status(200).json({ msg: "politica modificada" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}
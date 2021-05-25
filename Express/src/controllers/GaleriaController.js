const galeriaModel = require('../models/GaleriaModel')

exports.ListarGaleria = async (req,res) => {
    try {
        const imagenes = await galeriaModel.ListarGaleria()
        res.status(200).json({ imagenes })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ListarImagen = async (req,res) => {
    try {
        const imagenes = await galeriaModel.ListarImagen(req.params)
        res.status(200).json({ imagenes })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.AgregarImagen = async (req,res) => {
    try {
        await galeriaModel.AgregarImagen(req.body)
        res.status(200).json({ msg: "imagen agregada" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.EliminarImagen = async (req,res) => {
   try {
       await galeriaModel.EliminarImagen(req.params)
       res.status(200).json({ msg: "imagen eliminada" })
   } catch (error) {
       res.status(401).json({ err: error })
   }
}

exports.ModificarImagen = async (req,res) => {
    try {
        await galeriaModel.ModificarImagen(req.params, req.body)
        res.status(200).json({ msg: "imagen modificada" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}
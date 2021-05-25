const comentariosModel = require('../models/ComentariosModel')

exports.ListarComentariosPorProducto = async (req,res) => {
    try {
        const comentarios = await comentariosModel.ListarComentariosPorProducto(req.params)
        res.status(200).json({ comentarios })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ListarComentario = async (req,res) => {
    try {
        const comentario = await comentariosModel.ListarComentario(req.params)
        res.status(200).json({ comentario })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.AgregarComentario = async (req,res) => {
   try {
       await comentariosModel.AgregarComentario(req.body)
       res.status(200).json({ msg: "comentario agregado" })
   } catch (error) {
       res.status(401).json({ err: error })
   }
}

exports.EliminarComentario = async (req,res) => {
    try {
        await comentariosModel.EliminarComentario(req.params)
        res.status(200).json({ msg: "comentario eliminado" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ListarComentariosAdmin = async (req,res) => {
    try {
        const comentarios = await comentariosModel.ListarComentariosAdmin()
        res.status(200).json({ comentarios })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ModificarComentario = async (req,res) => {
    try {
        await comentariosModel.ModificarComentario(req.params, req.body)
        res.status(200).json({  })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}
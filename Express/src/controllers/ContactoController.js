const contactoModel = require('../models/ContactoModel')

exports.ListarContactos = async (req,res) => {
    try {
        const contactos = await contactoModel.ListarContactos()
        res.status(200).json({ contactos })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ListarContacto = async (req,res) => {
    try {
        const contacto = await contactoModel.ListarContacto(req.params)
        res.status(200).json({ contacto })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.AgregarContacto = async (req,res) => {
   try {
       await contactoModel.AgregarContacto(req.body)
       res.status(200).json({ msg: "contacto agregado" })
   } catch (error) {
       res.status(401).json({ err: error })
   }
}

exports.EliminarContacto = async (req,res) => {
    try {
        await contactoModel.EliminarContacto(req.params)
        res.status(200).json({ msg: "contacto eliminado" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ModificarContacto = async (req,res) => {
   try {
       await contactoModel.ModificarContacto(req.params, req.body)
       res.status(200).json({ msg: "contacto modificado" })
   } catch (error) {
       res.status(401).json({ err: error })
   }
}
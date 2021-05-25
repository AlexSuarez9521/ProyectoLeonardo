const productosModel = require('../models/ProductosModel')

exports.ListarProductos = async (req,res) => {
    try {
        const productos = await productosModel.ListarProductos()
        res.status(200).json({ productos })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ConsultarProducto = async (req,res) => {
    try {
        const producto = await productosModel.ConsultarProducto(req.params)
        res.status(200).json({ producto })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.AgregarProducto = async (req,res) => {
    try {
        await productosModel.AgregarProducto(req.body)
        res.status(200).json({ msg: "producto agregado" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ActualizarStock = async (req,res) => {
    try {
        await productosModel.ActualizarStock(req.params, req.body)
        res.status(200).json({ msg: "agregado stock" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.EliminarProducto = async (req,res) => {
    try {
        await productosModel.EliminarProducto(req.params)
        res.status(200).json({ msg: "producto eliminado" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.ModificarProducto = async (req,res) => {
    try {
        await productosModel.ModificarProducto(req.params, req.body)
        res.status(200).json({ msg: "producto modificado" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}


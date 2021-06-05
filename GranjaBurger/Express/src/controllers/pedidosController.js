const pedidosModel = require('../models/pedidosModel')

exports.ListarCartaPorCategoria = async (req,res) => {
    try {
        const carta = await pedidosModel.ListarCartaPorCategoria(req.params)
        res.status(200).json(carta)
    } catch (error) {
        res.status(401).json({ error })
    }
}

exports.ConsultarComida = async (req,res) => {
    try {
        const comida = await pedidosModel.ConsultarComida(req.params)
        res.status(200).json(comida)
    } catch (error) {
        res.status(401).json({ error })
    }
}

exports.ListarPedido = async () => {
    try {
        const pedido = await pedidosModel.ListarPedido()
        res.status(200).json(pedido)
    } catch (error) {
        res.status(401).json({ error })
    }
}

exports.AgregarComidaAlPedido = async (req,res) => {
    try {
        await pedidosModel.AgregarComidaAlPedido(req.body)
        res.status(200).json({ mensaje: "Exito al agregar" })
    } catch (error) {
        res.status(401).json({ error })
    }
}
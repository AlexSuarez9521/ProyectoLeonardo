const pedidosModel = require('../models/pedidosModel')

exports.ListarCartaPorCategoria = async (req,res) => {
    try {
        const carta = await pedidosModel.ListarCartaPorCategoria(req.params)
        res.status(200).json(carta)
    } catch (error) {
        res.status(401).json({ error })
    }
}
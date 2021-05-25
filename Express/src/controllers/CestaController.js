const cestaModel = require('../models/CestaModel')

exports.ConsultarCestaPorUsuario = async (req,res) => {
    try {
        const cesta = await cestaModel.ConsultarCestaPorUsuario(req.params)
        res.status(200).json({ cesta })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.AgregarProductoCesta = async (req,res) => {
    try {
        await cestaModel.AgregarProductoCesta(req.body)
        res.status(200).json({ msg: "producto agregado a la cesta" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}

exports.EliminarProductoCesta = async (req,res) => {
    try {
        await cestaModel.EliminarProductoCesta(req.params)
        res.status(200).json({ msg: "producto eliminado a la cesta" })
    } catch (error) {
        res.status(401).json({ err: error })
    }
}
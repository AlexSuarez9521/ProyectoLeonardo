import React, { useReducer } from 'react';
import PedidosContext from './useContext';
import PedidosReducer from './useReducer';
import ClienteAxios from '../../config/axios'
import {
    LISTAR_CARTA_POR_CATEGORIA,
    CONSULTAR_COMIDA,
    LISTAR_PEDIDO
} from '../../types'

const PedidosState = (props) => {

    const initialState = {
        carta: [],
        comida: [],
        pedido: []
    }

    const [state, dispatch] = useReducer(PedidosReducer, initialState)

    const ListarCartaPorCategoria = async (id) => {
        try {
            const response = await ClienteAxios.get(`/pedidos/${id}`)
            dispatch({
                type: LISTAR_CARTA_POR_CATEGORIA,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const ConsultarComidaSeleccionada = (id) => {
        dispatch({
            type: CONSULTAR_COMIDA,
            payload: id
        })
    }

    const AgregarComidaAlPedido = async (data) => {
        try {
            await ClienteAxios.post(`/pedidos/agregar`, data)
        } catch (error) {
            console.log(error)
        }
    }

    const ListarPedido = async () => {
        try {
            const response = await ClienteAxios.get(`/pedidos/listar`)
            dispatch({
                type: LISTAR_PEDIDO,
                payload: response.data
            })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PedidosContext.Provider
            value={{
                carta: state.carta,
                comida: state.comida,
                pedido: state.pedido,
                ListarCartaPorCategoria,
                ConsultarComidaSeleccionada,
                AgregarComidaAlPedido,
                ListarPedido
            }}
        >
            {props.children}
        </PedidosContext.Provider>
    )

}

export default PedidosState;
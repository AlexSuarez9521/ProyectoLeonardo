import React, { useReducer } from 'react';
import PedidosContext from './useContext';
import PedidosReducer from './useReducer';
import ClienteAxios from '../../config/axios'
import { 
    LISTAR_CARTA_POR_CATEGORIA,
    CONSULTAR_COMIDA
} from '../../types'

const PedidosState = (props) => {

    const initialState = {
        carta: [],
        comida: []
    }

    const [ state, dispatch ] = useReducer(PedidosReducer, initialState)

    const ListarCartaPorCategoria = async (id) => {
        try {
            const response = await ClienteAxios.get(`/pedidos/${id}`)
            dispatch({
                type: LISTAR_CARTA_POR_CATEGORIA,
                payload: response.data
            })
        } catch (error) {
            console.log(response.error)
        }
    }

    const ConsultarComidaSeleccionada = async (id) => {
        try {
            const response = await ClienteAxios.get(`/pedidos/comida/${id}`)
            dispatch({
                type: CONSULTAR_COMIDA,
                payload: response.data
            })
        } catch (error) {
            console.log(response.error)
        }
    }

    return (
        <PedidosContext.Provider
            value={{
                carta: state.carta,
                comida: state.comida,
                ListarCartaPorCategoria,
                ConsultarComidaSeleccionada
            }}
        >
            {props.children}
        </PedidosContext.Provider>
    )

}

export default PedidosState;
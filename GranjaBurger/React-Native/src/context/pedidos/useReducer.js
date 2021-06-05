import { 
    LISTAR_CARTA_POR_CATEGORIA,
    CONSULTAR_COMIDA,
    LISTAR_PEDIDO
} from '../../types';

export default (state, action) => {

    switch (action.type) {

        default:
            return state;

        case LISTAR_CARTA_POR_CATEGORIA:
            return {
                ...state,
                carta: action.payload
            }

        case LISTAR_PEDIDO:
            return {
                ...state,
                pedido: action.payload
            }
        
        case CONSULTAR_COMIDA:
            return {
                ...state,
                comida: state.carta.filter(item => item.id_carta === action.payload)
            }
    }

}
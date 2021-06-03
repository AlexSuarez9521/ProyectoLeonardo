import { 
    LISTAR_CARTA_POR_CATEGORIA,
    CONSULTAR_COMIDA
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
        
        case CONSULTAR_COMIDA:
            return {
                ...state,
                comida: action.payload
            }
    }

}
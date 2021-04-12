import { 
    USUARIO_LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../types';

export default (state, action) => {

    switch (action.type) {

        default:
            return state

        case USUARIO_LOGIN_EXITOSO:
            return {
                ...state,
                usuario: action.payload,
                rol: action.payload.id_rol,
                autenticado: true
            }

        case CERRAR_SESION:
            return {
                ...state,
                usuario: null,
                rol: null,
                autenticado: false
            }
        
    }

}
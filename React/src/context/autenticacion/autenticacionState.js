import React, { useReducer } from 'react'
import AutenticacionContext from './autenticacionContext'
import AutenticacionReducer from './autenticacionReducer'
import clienteAxios from '../../config/server'
import {
    USUARIO_REGISTRO_EXITOSO,
    USUARIO_LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../types'

const AutenticacionState = (props) => {

    const initializeState = {
        autenticado: false,
        usuario: null,
        rol: null
    }

    const [ state, dispatch ] = useReducer(AutenticacionReducer, initializeState)

    const RegistrarUsuario = async (datos) => {
        try {
            const usuario = await clienteAxios.post('/user', datos)
            dispatch({
                type: USUARIO_REGISTRO_EXITOSO
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    const LoginUsuario = async (datos) => {
        try {
            const usuario = await clienteAxios.post('/user/login', datos)
            dispatch({
                type: USUARIO_LOGIN_EXITOSO,
                payload: usuario.data.usuario[0]
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    const CerrarSesion = () => {
        try {
            dispatch({
                type: CERRAR_SESION
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <AutenticacionContext.Provider
            value={{
                autenticado: state.autenticado,
                usuario: state.usuario,
                rol: state.rol,
                RegistrarUsuario,
                LoginUsuario,
                CerrarSesion
            }}
        >
            {props.children}
        </AutenticacionContext.Provider>
    )
}

export default AutenticacionState
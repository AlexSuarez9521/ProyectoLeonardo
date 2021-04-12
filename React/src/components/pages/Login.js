import React, { useState, useContext, useEffect } from 'react'
import NavbarMenu from '../layout/NavbarMenu'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import AutenticacionContext from '../../context/autenticacion/autenticacionContext'

const Login = () => {

    const history = useHistory()

    const autenticacionContext = useContext(AutenticacionContext)
    const { LoginUsuario, rol, autenticado } = autenticacionContext

    useEffect(() => {
        if(autenticado) {
            if (rol == 1) {
                history.push('/admin')
            } else {
                history.push('/user')
            }
        }
    }, [rol, autenticado])

    const [ login, setLogin ] = useState({
        nombre: '',
        contra: '',
    })

    const onSubmit = (event) => {
        event.preventDefault();

        const { nombre, contra } = login

        if (nombre === '' || contra === '') {
            console.log("Todos los campos son obligatorios")
        } else {

            LoginUsuario({
                nombre,
                contra
            })

        }
    }

    const onChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <NavbarMenu />
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        name="nombre"
                        type="text" 
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        name="contra"
                        type="password" 
                        onChange={onChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </div>
    )
}

export default Login

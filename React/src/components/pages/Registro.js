import React, { useState, useContext } from 'react'
import NavbarMenu from '../layout/NavbarMenu';
import { Form, Button } from 'react-bootstrap';
import AutenticacionContext from '../../context/autenticacion/autenticacionContext';

const Registro = () => {

    const autenticacionContext = useContext(AutenticacionContext)
    const { RegistrarUsuario } = autenticacionContext

    const [ registro, setRegistro ] = useState({
        nombre: '',
        cedula: '',
        telefono: '',
        contra: '',
        id_rol: 2
    })

    const onSubmit = (event) => {
        event.preventDefault();

        const { nombre, cedula, telefono, contra, id_rol } = registro

        if (nombre === '' || cedula === '' || telefono === '' || contra === '') {
            console.log("Todos los campos son obligatorios")
        } else {

            RegistrarUsuario({
                nombre,
                cedula,
                telefono,
                contra,
                id_rol
            })

        }
    }

    const onChange = (event) => {
        setRegistro({
            ...registro,
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
                    <Form.Label>Cedula</Form.Label>
                    <Form.Control 
                        name="cedula"
                        type="text" 
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control 
                        name="telefono"
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

export default Registro

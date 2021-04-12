import React, { useState, useEffect, useContext } from 'react'
import NavbarMenu from '../layout/NavbarMenu'
import Comentario from '../layout/Comentario'
import AutenticacionContext from '../../context/autenticacion/autenticacionContext'
import clienteAxios from '../../config/server'
import { Row, Col } from 'react-bootstrap'

const Comentarios = () => {

    const autenticacionContext = useContext(AutenticacionContext)
    const { usuario } = autenticacionContext

    const [productos, setProductos] = useState([])

    const ListarProductos = async () => {
        const response = await clienteAxios.get('/producto')
        setProductos(response.data.productos)
    }

    useEffect(() => {
        ListarProductos()
    }, [])

    return (
        <div>
            <NavbarMenu />
            <Row>
                {productos ? 
                    productos.map(producto => {
                        return (
                            <Col md={4}>
                                <Comentario 
                                    key={producto.id_producto}
                                    producto={producto}
                                />
                            </Col>
                        )
                    })
                : null}
            </Row>
        </div>
    )
}

export default Comentarios

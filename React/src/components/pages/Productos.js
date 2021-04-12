import React, { useState, useEffect } from 'react'
import NavbarMenu from '../layout/NavbarMenu'
import { useLocation } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import clienteAxios from '../../config/server'
import Producto from '../layout/Producto'

const Productos = () => {

    const location = useLocation()
    const { dias, dia_inicio, dia_final } = location.state

    const [productos, setProductos] = useState([])

    const ListarProductos = async () => {
        try {
            const response = await clienteAxios.get('/producto')
            setProductos(response.data.productos)
        } catch (error) {
            console.log(error.response)
        }
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
                            <Producto 
                                key={producto.id_producto}
                                producto={producto}
                                dias={dias}
                                dia_inicio={dia_inicio}
                                dia_final={dia_final}
                            />
                        )
                    })
                    : <h1>No hay productos</h1>}
            </Row>
        </div>
    )
}

export default Productos

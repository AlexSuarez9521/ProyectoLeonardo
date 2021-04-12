import React, { useState, useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import clienteAxios from '../../config/server'
import AutenticacionContext from '../../context/autenticacion/autenticacionContext'

const Producto = ({ producto, dias, dia_inicio, dia_final }) => {

    const autenticacionContext = useContext(AutenticacionContext)
    const { usuario } = autenticacionContext

    const [cantidad, setCantidad] = useState(1)

    const AumentarCantidad = () => cantidad == producto.stock ? setCantidad(producto.stock) : setCantidad(cantidad + 1)
    const DisminuirCantidad = () => cantidad <= 1 ? setCantidad(1) : setCantidad(cantidad - 1)
    
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;

    const AgregarProductoAlCarrito = async () => {
        const datos = {
            id_usuario: usuario.id_usuario,
            id_producto: producto.id_producto,
            cantidad,
            precio: (producto.precio * dias) * cantidad,
            fecha_inicio: dia_inicio,
            fecha_final: dia_final,
            fecha_renta: dateTime
        }
        await clienteAxios.post('/cesta', datos)
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                        Hay: {producto.stock} unidades
                    </Card.Text>
                    <Card.Text>
                        Precio unitario: {producto.precio}
                    </Card.Text>
                    <Card.Text>
                        Dias: {dias}
                    </Card.Text>
                    <Card.Text>
                        Precio total: {producto.precio * dias}
                    </Card.Text>
                    <Card.Text>
                        <Button variant="primary" onClick={AumentarCantidad}>
                            +
                        </Button>
                        <Button variant="danger" onClick={DisminuirCantidad}>
                            -
                        </Button>
                    </Card.Text>
                    <Card.Text>
                        Cantidad: {cantidad}
                    </Card.Text>
                    <Button 
                        variant="primary"
                        onClick={AgregarProductoAlCarrito}
                    >
                        Agregar al carrito
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Producto

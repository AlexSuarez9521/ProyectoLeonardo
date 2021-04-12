import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import MaterialTable from 'material-table'
import clienteAxios from '../../config/server'

const Productos = () => {

    const columnas = [
        {
            title: 'Id',
            field: 'id_producto'
        },
        {
            title: 'Nombre',
            field: 'nombre'
        },
        {
            title: 'Stock',
            field: 'stock'
        },
        {
            title: 'Precio',
            field: 'precio'
        }
    ]

    const [productos, setProductos] = useState([])
    const [agregarProducto, setAgregarProducto] = useState({
        nombre: '',
        stock: '',
        precio: ''
    })
    const [modificarProducto, setModificarProducto] = useState({
        id_producto: '',
        nombre: '',
        stock: '',
        precio: ''
    })
    const [modificarProductoStock, setModificarProductoStock] = useState({
        id_producto: '',
        stock: ''
    })

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

    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalModificar, setShowModalModificar] = useState(false);
    const [showModalModificarStock, setShowModalModificarStock] = useState(false);

    const CerrarModalAgregar = () => setShowModalAgregar(false);
    const AbrirModalAgregar = () => setShowModalAgregar(true);

    const CerrarModalModificar = () => setShowModalModificar(false);
    const AbrirModalModificar = () => setShowModalModificar(true);

    const CerrarModalModificarStock = () => setShowModalModificarStock(false);
    const AbrirModalModificarStock = () => setShowModalModificarStock(true);

    const ProductoSeleccionado = (producto) => {
        setModificarProducto(producto)
        AbrirModalModificar()
    }

    const SeleccionarProductoStock = (producto) => {
        setModificarProductoStock(producto)
        AbrirModalModificarStock()
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { nombre, stock, precio } = agregarProducto;

        if (nombre === '' || stock === '' || precio === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { nombre, stock, precio }
            await clienteAxios.post('/producto', datos)
        }
    }

    const onSubmitModificar = async (event) => {
        event.preventDefault();

        const { id_producto, nombre, stock, precio } = modificarProducto;

        if (nombre === '' || stock === '' || precio === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { nombre, stock, precio }
            await clienteAxios.put(`/producto/${id_producto}`, datos)
        }
    }

    const onSubmitModificarStock = async (event) => {
        event.preventDefault();

        const { id_producto, stock } = modificarProductoStock

        if (stock === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { stock }
            await clienteAxios.put(`/producto/stock/${id_producto}`, datos)
        }
    }

    const onChangeAgregar = (event) => {
        setAgregarProducto({
            ...agregarProducto,
            [event.target.name]: event.target.value
        })
    }

    const onChangeModificar = (event) => {
        setModificarProducto({
            ...modificarProducto,
            [event.target.name]: event.target.value
        })
    }

    const onChangeModificarStock = (event) => {
        setModificarProductoStock({
            ...modificarProductoStock,
            [event.target.name]: event.target.value
        })
    }

    const formModalAgregar = (
        <Form onSubmit={onSubmitAgregar}>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    id="nombre"
                    name="nombre"
                    type="text"
                    onChange={onChangeAgregar}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Stock</Form.Label>
                <Form.Control
                    id="stock"
                    name="stock"
                    type="number"
                    onChange={onChangeAgregar}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    id="precio"
                    name="precio"
                    type="number"
                    onChange={onChangeAgregar}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Producto
            </Button>
        </Form>
    )

    const formModalModificar = (
        <Form onSubmit={onSubmitModificar}>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    id="nombre"
                    name="nombre"
                    type="text"
                    onChange={onChangeModificar}
                    value={modificarProducto && modificarProducto.nombre}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Stock</Form.Label>
                <Form.Control
                    id="stock"
                    name="stock"
                    type="number"
                    onChange={onChangeModificar}
                    value={modificarProducto && modificarProducto.stock}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    id="precio"
                    name="precio"
                    type="number"
                    onChange={onChangeModificar}
                    value={modificarProducto && modificarProducto.precio}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Producto
            </Button>
        </Form>

    )

    const formModalModificarStock = (
        <Form onSubmit={onSubmitModificarStock}>
            <Form.Group>
                <Form.Label>Stock</Form.Label>
                <Form.Control
                    id="stock"
                    name="stock"
                    type="number"
                    onChange={onChangeModificarStock}
                    value={modificarProductoStock && modificarProductoStock.stock}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Stock
            </Button>
        </Form>

    )

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={CerrarModalAgregar}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModalAgregar}
            </Modal.Body>
        </Modal>
    )

    const modalModificar = (
        <Modal show={showModalModificar} onHide={CerrarModalModificar}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModalModificar}
            </Modal.Body>
        </Modal>
    )

    const modalModificarStock = (
        <Modal show={showModalModificarStock} onHide={CerrarModalModificarStock}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Stock</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModalModificarStock}
            </Modal.Body>
        </Modal>
    )

    return (
        <div>

            <Row>
                <Col>
                    <Button variant="primary" onClick={AbrirModalAgregar}>
                        Agregar Producto
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarProductos}>
                        Refrescar
                    </Button>
                </Col>
            </Row>


            {modalAgregar}
            {modalModificar}
            {modalModificarStock}

            <MaterialTable
                columns={columnas}
                data={productos}
                title="Productos"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar producto',
                        onClick: (e, rowData) => ProductoSeleccionado(rowData)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar producto',
                        onClick: async (e, rowData) => await clienteAxios.delete(`/producto/${rowData.id_producto}`) 
                    },
                    {
                        icon: 'add',
                        tooltip: 'Agregar stock',
                        onClick: (e, rowData) => SeleccionarProductoStock(rowData) 
                    },
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header: {
                        actions: 'Acciones'
                    }
                }}
            />

        </div>
    )
}

export default Productos
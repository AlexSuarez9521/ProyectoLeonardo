import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import MaterialTable from 'material-table'
import clienteAxios from '../../config/server'

const Comentarios = () => {

    const columnas = [
        {
            title: 'Id',
            field: 'id_comentario'
        },
        {
            title: 'Producto',
            field: 'nombre'
        },
        {
            title: 'Comentario',
            field: 'descripcion'
        }
    ]

    const [comentarios, setComentarios] = useState([])
    const [productos, setProductos] = useState([])
    const [comentario, nuevoComentario] = useState({
        id_producto: '',
        descripcion: '',
    })
    const [modificarComentario, setModificarComentario] = useState({
        id_comentario: '',
        id_producto: '',
        descripcion: '',
    })

    const ListarComentarios = async () => {
        try {
            const response = await clienteAxios.get('/comentario')
            setComentarios(response.data.comentarios)
        } catch (error) {
            console.log(error.response)
        }
    }

    const ListarProductos = async () => {
        try {
            const response = await clienteAxios.get('/producto')
            setProductos(response.data.productos)
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        ListarComentarios()
        ListarProductos()
    }, [])

    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalModificar, setShowModalModificar] = useState(false);

    const CerrarModalAgregar = () => setShowModalAgregar(false);
    const AbrirModalAgregar = () => setShowModalAgregar(true);

    const CerrarModalModificar = () => setShowModalModificar(false);
    const AbrirModalModificar = () => setShowModalModificar(true);

    const SeleccionarComentario = (comentario) => {
        setModificarComentario(comentario)
        AbrirModalModificar()
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { id_producto, descripcion } = comentario;

        if (id_producto === '' || descripcion === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { id_producto, descripcion }
            await clienteAxios.post('/comentario', datos)
        }
    }

    const onSubmitModificar = async (event) => {
        event.preventDefault();

        const { id_comentario, id_producto, descripcion } = modificarComentario;

        if (id_producto === '' || descripcion === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { id_producto, descripcion }
            await clienteAxios.put(`/comentario/${id_comentario}`, datos)
        }
    }

    const onChangeAgregar = (event) => {
        nuevoComentario({
            ...comentario,
            [event.target.name]: event.target.value
        })
    }

    const onChangeModificar = (event) => {
        setModificarComentario({
            ...modificarComentario,
            [event.target.name]: event.target.value
        })
    }

    const formModalAgregar = (
        <Form onSubmit={onSubmitAgregar}>
            <Form.Group>
                <Form.Label>Producto</Form.Label>
                <Form.Control
                    id="id_producto"
                    name="id_producto"
                    as="select"
                    size="lg"
                    custom
                    onChange={onChangeAgregar}
                >
                    <option value="">Seleccione el producto</option>
                    {productos ?
                        productos.map(producto => {
                            return (
                                <option
                                    value={producto.id_producto}
                                >
                                    {producto.nombre}
                                </option>
                            )
                        })
                    : null}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    id="descripcion"
                    name="descripcion"
                    type="text"
                    onChange={onChangeAgregar}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Agregar Comentario
            </Button>
        </Form>
    )

    const formModalModificar = (
        <Form onSubmit={onSubmitModificar}>

            <Form.Group>
                <Form.Label>Producto</Form.Label>
                <Form.Control
                    id="id_producto"
                    name="id_producto"
                    as="select"
                    size="lg"
                    custom
                    onChange={onChangeModificar}
                    value={modificarComentario && modificarComentario.id_producto}
                >
                    {productos ?
                        productos.map(producto => {
                            return (
                                <option
                                    value={producto.id_producto}
                                >
                                    {producto.nombre}
                                </option>
                            )
                        })
                        : null}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    id="descripcion"
                    name="descripcion"
                    type="text"
                    onChange={onChangeModificar}
                    value={modificarComentario && modificarComentario.descripcion}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Comentario
            </Button>
        </Form>

    )

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={CerrarModalAgregar}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Comentario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModalAgregar}
            </Modal.Body>
        </Modal>
    )

    const modalModificar = (
        <Modal show={showModalModificar} onHide={CerrarModalModificar}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Comentario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModalModificar}
            </Modal.Body>
        </Modal>
    )

    return (
        <div>

            <Row>
                <Col>
                    <Button variant="primary" onClick={AbrirModalAgregar}>
                        Agregar Comentario
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarComentarios}>
                        Refrescar
                    </Button>
                </Col>
            </Row>


            {modalAgregar}
            {modalModificar}

            <MaterialTable
                columns={columnas}
                data={comentarios}
                title="Comentarios"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar comentario',
                        onClick: (e, rowData) => SeleccionarComentario(rowData)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar comentario',
                        onClick: async (e, rowData) => await clienteAxios.delete(`/comentario/${rowData.id_comentario}`) 
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

export default Comentarios

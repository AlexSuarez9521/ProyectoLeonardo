import React, { useState } from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap'
import clienteAxios from '../../config/server'

const Comentario = ({ producto }) => {

    const [comentarios, setComentarios] = useState([])
    const [agregarComentario, setAgregarComentario] = useState({
        descripcion: ''
    })

    const ListarComentariosPorProducto = async () => {
        const response = await clienteAxios.get(`/comentario/producto/${producto.id_producto}`)
        setComentarios(response.data.comentarios)
    }

    const [showModalComentarios, setShowModalComentarios] = useState(false)
    const [showModalAgregarComentario, setShowModalAgregarComentario] = useState(false)

    const CerrarModalComentarios = () => setShowModalComentarios(false);
    const AbrirModalComentarios = () => {
        setShowModalComentarios(true)
        ListarComentariosPorProducto()
    }

    const CerrarModalAgregarComentario = () => setShowModalAgregarComentario(false);
    const AbrirModalAgregarComentario = () => setShowModalAgregarComentario(true);

    const onChange = (event) => {
        setAgregarComentario({
            ...agregarComentario,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        const { descripcion } = agregarComentario

        if (descripcion == '') {
            console.log('El campo es obligatorio')
        } else {
            const datos = { id_producto: producto.id_producto, descripcion }
            await clienteAxios.post('/comentario', datos)
        }

    }

    const bodyComentarios = (
        <div>
            {comentarios.length > 0 ?
                comentarios.map(comentario => {
                    return (
                        <div>
                            <ul>
                                <li>{comentario.descripcion}</li>
                            </ul>
                        </div>
                    )
                })
                : <h1>No hay comentarios</h1>}
        </div>
    )

    const bodyAgregarComentario = (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Comentario</Form.Label>
                <Form.Control
                    id="descripcion"
                    name="descripcion"
                    type="text"
                    onChange={onChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Comentario
            </Button>
        </Form>
    )

    const modalComentarios = (
        <Modal show={showModalComentarios} onHide={CerrarModalComentarios}>
            <Modal.Header closeButton>
                <Modal.Title>Comentarios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {bodyComentarios}
            </Modal.Body>
        </Modal>
    )

    const modalAgregarComentario = (
        <Modal show={showModalAgregarComentario} onHide={CerrarModalAgregarComentario}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Comentario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {bodyAgregarComentario}
            </Modal.Body>
        </Modal>
    )

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Button
                    variant="primary"
                    onClick={AbrirModalComentarios}
                >
                    Mirar comentarios
                </Button>
                <Button
                    variant="secondary"
                    onClick={AbrirModalAgregarComentario}
                >
                    Agregar comentario
                </Button>
            </Card.Body>

            {modalComentarios}
            {modalAgregarComentario}

        </Card>
    )
}

export default Comentario

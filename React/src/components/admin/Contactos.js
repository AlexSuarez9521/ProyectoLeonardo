import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import MaterialTable from 'material-table'
import clienteAxios from '../../config/server'

const Contactos = () => {

    const columnas = [
        {
            title: 'Id',
            field: 'id_formulario_contacto'
        },
        {
            title: 'Correo',
            field: 'correo'
        },
        {
            title: 'Mensaje',
            field: 'mensaje'
        }
    ]

    const [contactos, setContactos] = useState([])
    const [contacto, nuevoContacto] = useState({
        correo: '',
        mensaje: '',
    })
    const [modificarContacto, setModificarContacto] = useState({
        id_formulario_contacto: '',
        correo: '',
        mensaje: '',
    })

    const ListarContactos = async () => {
        try {
            const response = await clienteAxios.get('/contacto')
            setContactos(response.data.contactos)
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        ListarContactos()
    }, [])

    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalModificar, setShowModalModificar] = useState(false);

    const CerrarModalAgregar = () => setShowModalAgregar(false);
    const AbrirModalAgregar = () => setShowModalAgregar(true);

    const CerrarModalModificar = () => setShowModalModificar(false);
    const AbrirModalModificar = () => setShowModalModificar(true);

    const SeleccionarContacto = (contacto) => {
        setModificarContacto(contacto)
        AbrirModalModificar()
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { correo, mensaje } = contacto;

        if (correo === '' || mensaje === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { correo, mensaje }
            await clienteAxios.post('/contacto', datos)
        }
    }

    const onSubmitModificar = async (event) => {
        event.preventDefault();

        const { id_formulario_contacto, correo, mensaje } = modificarContacto;

        if (correo === '' || mensaje === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { correo, mensaje }
            await clienteAxios.put(`/contacto/${id_formulario_contacto}`, datos)
        }
    }

    const onChangeAgregar = (event) => {
        nuevoContacto({
            ...contacto,
            [event.target.name]: event.target.value
        })
    }

    const onChangeModificar = (event) => {
        setModificarContacto({
            ...modificarContacto,
            [event.target.name]: event.target.value
        })
    }

    const formModalAgregar = (
        <Form onSubmit={onSubmitAgregar}>
            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    id="correo"
                    name="correo"
                    type="email"
                    onChange={onChangeAgregar}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                    id="mensaje"
                    name="mensaje"
                    type="text"
                    onChange={onChangeAgregar}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Contacto
            </Button>
        </Form>
    )

    const formModalModificar = (
        <Form onSubmit={onSubmitModificar}>
            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    id="correo"
                    name="correo"
                    type="text"
                    onChange={onChangeModificar}
                    value={modificarContacto && modificarContacto.correo}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                    id="mensaje"
                    name="mensaje"
                    type="text"
                    onChange={onChangeModificar}
                    value={modificarContacto && modificarContacto.mensaje}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Contacto
            </Button>
        </Form>

    )

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={CerrarModalAgregar}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModalAgregar}
            </Modal.Body>
        </Modal>
    )

    const modalModificar = (
        <Modal show={showModalModificar} onHide={CerrarModalModificar}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Contacto</Modal.Title>
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
                        Agregar Contacto
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarContactos}>
                        Refrescar
                    </Button>
                </Col>
            </Row>


            {modalAgregar}
            {modalModificar}

            <MaterialTable
                columns={columnas}
                data={contactos}
                title="Contactos"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar contacto',
                        onClick: (e, rowData) => SeleccionarContacto(rowData)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar contacto',
                        onClick: async (e, rowData) => await clienteAxios.delete(`/contacto/${rowData.id_formulario_contacto}`) 
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

export default Contactos

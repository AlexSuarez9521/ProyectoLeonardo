import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import MaterialTable from 'material-table'
import clienteAxios from '../../config/server'

const Galeria = () => {

    const columnas = [
        {
            title: 'Id',
            field: 'id_galeria'
        },
        {
            title: 'Imagen',
            field: 'imagen'
        }
    ]

    const [galeria, setGaleria] = useState([])
    const [agregarGaleria, setAgregarGaleria] = useState({
        imagen: ''
    })
    const [modificarGaleria, setModificarGaleria] = useState({
        id_galeria: '',
        imagen: ''
    })

    const ListarGaleria = async () => {
        try {
            const response = await clienteAxios.get('/galeria')
            setGaleria(response.data.imagenes)
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        ListarGaleria()
    }, [])

    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalModificar, setShowModalModificar] = useState(false);

    const CerrarModalAgregar = () => setShowModalAgregar(false);
    const AbrirModalAgregar = () => setShowModalAgregar(true);

    const CerrarModalModificar = () => setShowModalModificar(false);
    const AbrirModalModificar = () => setShowModalModificar(true);

    const SeleccionarGaleria = (imagen) => {
        setModificarGaleria(imagen)
        AbrirModalModificar()
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { imagen } = agregarGaleria;

        if (imagen === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { imagen }
            await clienteAxios.post('/galeria', datos)
        }
    }

    const onSubmitModificar = async (event) => {
        event.preventDefault();

        const { id_galeria, imagen } = modificarGaleria;

        if (imagen === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { imagen }
            await clienteAxios.put(`/galeria/${id_galeria}`, datos)
        }
    }

    const onChangeAgregar = (event) => {
        setAgregarGaleria({
            ...agregarGaleria,
            [event.target.name]: event.target.value
        })
    }

    const onChangeModificar = (event) => {
        setModificarGaleria({
            ...modificarGaleria,
            [event.target.name]: event.target.value
        })
    }

    const formModalAgregar = (
        <Form onSubmit={onSubmitAgregar}>
            <Form.Group>
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                    id="imagen"
                    name="imagen"
                    type="text"
                    onChange={onChangeAgregar}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Imagen
            </Button>
        </Form>
    )

    const formModalModificar = (
        <Form onSubmit={onSubmitModificar}>
            <Form.Group>
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                    id="imagen"
                    name="imagen"
                    type="text"
                    onChange={onChangeModificar}
                    value={modificarGaleria && modificarGaleria.imagen}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Imagen
            </Button>
        </Form>

    )

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={CerrarModalAgregar}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Galeria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModalAgregar}
            </Modal.Body>
        </Modal>
    )

    const modalModificar = (
        <Modal show={showModalModificar} onHide={CerrarModalModificar}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Galeria</Modal.Title>
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
                        Agregar Galeria
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarGaleria}>
                        Refrescar
                    </Button>
                </Col>
            </Row>


            {modalAgregar}
            {modalModificar}

            <MaterialTable
                columns={columnas}
                data={galeria}
                title="Galeria"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar galeria',
                        onClick: (e, rowData) => SeleccionarGaleria(rowData)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar galeria',
                        onClick: async (e, rowData) => await clienteAxios.delete(`/galeria/${rowData.id_galeria}`) 
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

export default Galeria

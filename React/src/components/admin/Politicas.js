import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import MaterialTable from 'material-table'
import clienteAxios from '../../config/server'

const Politicas = () => {

    const columnas = [
        {
            title: 'Id',
            field: 'id_terminos_condiciones'
        },
        {
            title: 'Politica',
            field: 'descripcion'
        }
    ]


    const [politicas, setPoliticas] = useState([])
    const [agregarPolitica, setAgregarPolitica] = useState({
        descripcion: ''
    })
    const [modificarPolitica, setModificarPolitica] = useState({
        id_terminos_condiciones: '',
        descripcion: ''
    })

    const ListarPoliticas = async () => {
        try {
            const response = await clienteAxios.get('/politicas')
            setPoliticas(response.data.politicas)
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        ListarPoliticas()
    }, [])

    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalModificar, setShowModalModificar] = useState(false);

    const CerrarModalAgregar = () => setShowModalAgregar(false);
    const AbrirModalAgregar = () => setShowModalAgregar(true);

    const CerrarModalModificar = () => setShowModalModificar(false);
    const AbrirModalModificar = () => setShowModalModificar(true);

    const SeleccionarPolitica = (politica) => {
        setModificarPolitica(politica)
        AbrirModalModificar()
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { descripcion } = agregarPolitica;

        if (descripcion === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { descripcion }
            await clienteAxios.post('/politicas', datos)
        }
    }

    const onSubmitModificar = async (event) => {
        event.preventDefault();

        const { id_terminos_condiciones, descripcion } = modificarPolitica;

        if (descripcion === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            const datos = { descripcion }
            await clienteAxios.put(`/politicas/${id_terminos_condiciones}`, datos)
        }
    }

    const onChangeAgregar = (event) => {
        setAgregarPolitica({
            ...agregarPolitica,
            [event.target.name]: event.target.value
        })
    }

    const onChangeModificar = (event) => {
        setModificarPolitica({
            ...modificarPolitica,
            [event.target.name]: event.target.value
        })
    }

    const formModalAgregar = (
        <Form onSubmit={onSubmitAgregar}>
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
                Agregar Politica
            </Button>
        </Form>
    )

    const formModalModificar = (
        <Form onSubmit={onSubmitModificar}>
            <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    id="descripcion"
                    name="descripcion"
                    type="text"
                    onChange={onChangeModificar}
                    value={modificarPolitica && modificarPolitica.descripcion}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Politica
            </Button>
        </Form>

    )

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={CerrarModalAgregar}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Politica</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModalAgregar}
            </Modal.Body>
        </Modal>
    )

    const modalModificar = (
        <Modal show={showModalModificar} onHide={CerrarModalModificar}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Politica</Modal.Title>
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
                        Agregar Politica
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarPoliticas}>
                        Refrescar
                    </Button>
                </Col>
            </Row>


            {modalAgregar}
            {modalModificar}

            <MaterialTable
                columns={columnas}
                data={politicas}
                title="Politicas"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar politica',
                        onClick: (e, rowData) => SeleccionarPolitica(rowData)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar politica',
                        onClick: async (e, rowData) => await clienteAxios.delete(`/politicas/${rowData.id_terminos_condiciones}`) 
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

export default Politicas
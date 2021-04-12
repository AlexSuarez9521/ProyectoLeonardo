import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import MaterialTable from 'material-table'
import clienteAxios from '../../config/server'

const Usuarios = () => {

    const columnas = [
        {
            title: 'Id',
            field: 'id_usuario'
        },
        {
            title: 'Nombre',
            field: 'nombre'
        },
        {
            title: 'Cedula',
            field: 'cedula'
        },
        {
            title: 'Telefono',
            field: 'telefono'
        },
        {
            title: 'Contraseña',
            field: 'contra'
        },
        {
            title: 'Rol',
            field: 'descripcion'
        }
    ]

    const [usuarios, setUsuarios] = useState([])
    const [usuario, nuevoUsuario] = useState({
        nombre: '',
        cedula: '',
        telefono: '',
        contra: '',
        id_rol: 1
    })
    const [modificarUsuario, setModificarUsuario] = useState({
        id_usuario: '',
        nombre: '',
        cedula: '',
        telefono: '',
        contra: '',
        id_rol: 1
    })
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalModificar, setShowModalModificar] = useState(false);

    const ListarUsuarios = async () => {
        try {
            const response = await clienteAxios.get('/user')
            setUsuarios(response.data.usuarios)
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        ListarUsuarios()
    }, [])

    const CerrarModalAgregar = () => setShowModalAgregar(false);
    const AbrirModalAgregar = () => setShowModalAgregar(true);

    const CerrarModalModificar = () => setShowModalModificar(false);
    const AbrirModalModificar = () => setShowModalModificar(true);

    const UsuarioSeleccionado = (usuario) => {
        AbrirModalModificar();
        setModificarUsuario(usuario);
    }

    const onSubmitAgregar = async (event) => {
        event.preventDefault();

        const { nombre, cedula, telefono, contra, id_rol } = usuario;

        if (nombre == '' || cedula == '' || telefono == '' || contra == '' || id_rol == '') {
            console.log('todos los campos son obligatorios')
        } else {
            const datos = { nombre, cedula, telefono, contra, id_rol }
            await clienteAxios.post('/user', datos)
        }

    }

    const onSubmitModificar = async (event) => {
        event.preventDefault();

        const { id_usuario, nombre, cedula, telefono, contra, id_rol } = modificarUsuario;

        if (nombre == '' || cedula == '' || telefono == '' || contra == '' || id_rol == '') {
            console.log('todos los campos son obligatorios')
        } else {
            const datos = { nombre, cedula, telefono, contra, id_rol }
            await clienteAxios.put(`/user/${id_usuario}`, datos)
        }

    }

    const onChangeAgregar = (event) => {
        nuevoUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        })
    }

    const onChangeModificar = (event) => {
        setModificarUsuario({
            ...modificarUsuario,
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
                <Form.Label>Cedula</Form.Label>
                <Form.Control
                    id="cedula"
                    name="cedula"
                    type="text"
                    onChange={onChangeAgregar}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                    id="telefono"
                    name="telefono"
                    type="text"
                    onChange={onChangeAgregar}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    id="contra"
                    name="contra"
                    type="text"
                    onChange={onChangeAgregar}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Rol</Form.Label>
                <Form.Control
                    id="id_rol"
                    name="id_rol"
                    as="select"
                    size="lg"
                    custom
                    onChange={onChangeAgregar}
                >
                    <option value="1">Admin</option>
                    <option value="2">Usuario</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Usuario
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
                    value={modificarUsuario && modificarUsuario.nombre}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Cedula</Form.Label>
                <Form.Control
                    id="cedula"
                    name="cedula"
                    type="text"
                    onChange={onChangeModificar}
                    value={modificarUsuario && modificarUsuario.cedula}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                    id="telefono"
                    name="telefono"
                    type="text"
                    onChange={onChangeModificar}
                    value={modificarUsuario && modificarUsuario.telefono}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    id="contra"
                    name="contra"
                    type="text"
                    onChange={onChangeModificar}
                    value={modificarUsuario && modificarUsuario.contra}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Rol</Form.Label>
                <Form.Control
                    id="id_rol"
                    name="id_rol"
                    as="select"
                    size="lg"
                    custom
                    onChange={onChangeModificar}
                    value={modificarUsuario && modificarUsuario.id_rol}
                >
                    <option>Rol</option>
                    <option value="1">Admin</option>
                    <option value="2">Usuario</option>
                </Form.Control>
            </Form.Group>

            <h5>Rol actual: {modificarUsuario.descripcion}</h5>

            <Button variant="primary" type="submit">
                Modificar Usuario
            </Button>

        </Form>

    )

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={CerrarModalAgregar}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModalAgregar}
            </Modal.Body>
        </Modal>
    )

    const modalModificar = (
        <Modal show={showModalModificar} onHide={CerrarModalModificar}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar usuario</Modal.Title>
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
                        Agregar Usuario
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={ListarUsuarios}>
                        Refrescar
                    </Button>
                </Col>
            </Row>

            {modalAgregar}
            {modalModificar}

            <MaterialTable
                columns={columnas}
                data={usuarios}
                title="Usuarios"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar usuario',
                        onClick: (e, rowData) => UsuarioSeleccionado(rowData)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar usuario',
                        onClick: async (e, rowData) => await clienteAxios.delete(`/user/${rowData.id_usuario}`) 
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

export default Usuarios
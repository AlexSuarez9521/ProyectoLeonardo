import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Formulario = () => {

    const history = useHistory()

    const [busqueda, setBusqueda] = useState({
        fecha_inicio: '',
        fecha_final: ''
    })

    const onSubmit = (event) => {
        event.preventDefault()

        const { fecha_inicio, fecha_final } = busqueda

        if (fecha_inicio > fecha_final) {
            console.log('no sirve la busqueda')
        } else {
            const dia_inicio = new Date(fecha_inicio)
            const dia_final = new Date(fecha_final)
            const conversion = dia_final.getTime() - dia_inicio.getTime();
            const dias = conversion / (1000 * 60 * 60 * 24);
            history.push('/productos', { dias, dia_inicio, dia_final })
        }

    }

    const onChange = (event) => {
        setBusqueda({
            ...busqueda,
            [event.target.name] : event.target.value
        })
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Fecha Inicio:</Form.Label>
                            <Form.Control
                                id="fecha_inicio"
                                name="fecha_inicio"
                                type="date"
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Fecha Final:</Form.Label>
                            <Form.Control
                                id="fecha_final"
                                name="fecha_final"
                                type="date"
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Buscar
                </Button>
            </Form>
        </div>
    )
}

export default Formulario

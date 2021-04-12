import React, { useContext } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import AutenticacionContext from '../../context/autenticacion/autenticacionContext'

const NavbarMenu = () => {

    const history = useHistory()

    const autenticacionContext = useContext(AutenticacionContext)
    const { autenticado, CerrarSesion } = autenticacionContext

    const VolverAlIndex = () => {
        CerrarSesion()
        history.push("/")
    }

    return (
        <div>
            {autenticado ?
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => history.push('/user')}>Inicio</Nav.Link>
                            <Nav.Link onClick={() => history.push('/comentarios')}>Comentarios</Nav.Link>
                            <Nav.Link onClick={() => history.push('/cesta')}>Cesta</Nav.Link>
                            <Button variant="primary" type="button" onClick={VolverAlIndex}>
                                Cerrar Sesion
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                :
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Nombre de la pagina</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/registro">Registro</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            }
        </div>
    )
}

export default NavbarMenu

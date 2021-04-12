import React, { useContext } from 'react'
import AutenticacionContext from '../../context/autenticacion/autenticacionContext'
import SidebarItem from '../layout/SidebarItem'
import { BrowserRouter, Route, useHistory } from 'react-router-dom'
import Usuarios from '../admin/Usuarios'
import Comentarios from '../admin/Comentarios'
import Contactos from '../admin/Contactos'
import Galeria from '../admin/Galeria'
import Politicas from '../admin/Politicas'
import Productos from '../admin/Productos'
import { Button } from 'react-bootstrap'
import '../styles/Sidebar.css'

const Admin = () => {

    const history = useHistory()

    const autenticacionContext = useContext(AutenticacionContext)
    const { CerrarSesion } = autenticacionContext

    const VolverAlIndex = () => {
        CerrarSesion()
        history.push("/")
    }    

    return (
        <BrowserRouter>
            <div class="d-flex" id="wrapper">

                <div class="bg-light border-right" id="sidebar-wrapper">
                    <div class="sidebar-heading">Admin</div>
                        <div class="list-group list-group-flush">
                            <SidebarItem />
                        </div>
                    </div>
        
            <div id="page-content-wrapper">
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Button variant="primary" type="button" onClick={VolverAlIndex}>
                            Cerrar Sesion
                        </Button>
                    </li>
                </ul>
                </div>
            </nav>
        
            <div class="container-fluid">
                <Route exact path='/admin/usuarios' component={Usuarios} />
                <Route exact path='/admin/comentarios' component={Comentarios} />
                <Route exact path='/admin/contactos' component={Contactos} />
                <Route exact path='/admin/galeria' component={Galeria} />
                <Route exact path='/admin/politicas' component={Politicas} />
                <Route exact path='/admin/productos' component={Productos} />
            </div>
            </div>
        
        </div>
      </BrowserRouter>
    )
}

export default Admin

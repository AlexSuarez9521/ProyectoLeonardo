import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css'

const SidebarItem = () => {
    return (
        <div>
          <NavLink to='/admin/usuarios'>
            <a href="#" className="list-group-item list-group-item-action bg-light">Usuarios</a>
          </NavLink>
          <NavLink to='/admin/comentarios'>
            <a href="#" className="list-group-item list-group-item-action bg-light">Comentarios</a>
          </NavLink>
          <NavLink to='/admin/contactos'>
            <a href="#" className="list-group-item list-group-item-action bg-light">Contactos</a>
          </NavLink>
          <NavLink to='/admin/galeria'>
            <a href="#" className="list-group-item list-group-item-action bg-light">Galeria</a>
          </NavLink>
          <NavLink to='/admin/politicas'>
            <a href="#" className="list-group-item list-group-item-action bg-light">Politicas</a>
          </NavLink>
          <NavLink to='/admin/productos'>
            <a href="#" className="list-group-item list-group-item-action bg-light">Productos</a>
          </NavLink>
        </div>
    )
}

export default SidebarItem

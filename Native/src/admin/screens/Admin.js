import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ModuloUsuarios from '../modulos/ModuloUsuarios'
import ModuloContactos from '../modulos/ModuloContactos'
import ModuloPoliticas from '../modulos/ModuloPoliticas'
import ModuloGaleria from '../modulos/ModuloGaleria'
import ModuloComentarios from '../modulos/ModuloComentarios'

const Admin = ({ navigation }) => {

    const MenuLateral = createDrawerNavigator()

    return (
        <MenuLateral.Navigator initialRouteName="usuarios" >
            <MenuLateral.Screen name="usuarios" component={ModuloUsuarios}/>
            <MenuLateral.Screen name="contactos" component={ModuloContactos}/>
            <MenuLateral.Screen name="politicas" component={ModuloPoliticas}/>
            <MenuLateral.Screen name="galeria" component={ModuloGaleria}/>
            <MenuLateral.Screen name="comentarios" component={ModuloComentarios}/>
        </MenuLateral.Navigator>
    )
}

export default Admin;

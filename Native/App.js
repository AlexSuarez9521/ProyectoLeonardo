import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/login/screens/Login'
import Registro from './src/registro/screens/Registro'
import Admin from './src/admin/screens/Admin'

import AgregarUsuario from './src/admin/screens/usuarios/AgregarUsuario'
import ModificarUsuario from './src/admin/screens/usuarios/ModificarUsuario'
import AgregarContacto from './src/admin/screens/contactos/AgregarContacto'
import ModificarContacto from './src/admin/screens/contactos/ModificarContacto'
import AgregarPolitica from './src/admin/screens/politicas/AgregarPolitica'
import ModificarPolitica from './src/admin/screens/politicas/ModificarPolitica' 
import AgregarGaleria from './src/admin/screens/galeria/AgregarGaleria'
import ModificarGaleria from './src/admin/screens/galeria/ModificarGaleria'
import AgregarComentario from './src/admin/screens/comentarios/AgregarComentario'
import ModificarComentario from './src/admin/screens/comentarios/ModificarComentario'

import User from './src/user/screens/User'

export default function App() {

  const rootStack = createStackNavigator()

  return (
    <NavigationContainer>
      <rootStack.Navigator>
        <rootStack.Screen name="Login" component={Login} />
        <rootStack.Screen name="Registro" component={Registro} />
        <rootStack.Screen name="Menu" component={Admin} />

        <rootStack.Screen name="Menu/agregar/usuario" component={AgregarUsuario} />
        <rootStack.Screen name="Menu/modificar/usuario" component={ModificarUsuario} />
        <rootStack.Screen name="Menu/agregar/contacto" component={AgregarContacto} />
        <rootStack.Screen name="Menu/modificar/contacto" component={ModificarContacto} />
        <rootStack.Screen name="Menu/agregar/politica" component={AgregarPolitica} />
        <rootStack.Screen name="Menu/modificar/politica" component={ModificarPolitica} />
        <rootStack.Screen name="Menu/agregar/galeria" component={AgregarGaleria} />
        <rootStack.Screen name="Menu/modificar/galeria" component={ModificarGaleria} />
        <rootStack.Screen name="Menu/agregar/comentario" component={AgregarComentario} />
        <rootStack.Screen name="Menu/modificar/comentario" component={ModificarComentario} />


        <rootStack.Screen name="User" component={User} />
      </rootStack.Navigator>
    </NavigationContainer>
  );
}
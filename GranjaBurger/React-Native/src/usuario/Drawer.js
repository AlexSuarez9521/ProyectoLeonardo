import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Perfil from './screens/Perfil'
import Ubicacion from './screens/Ubicacion'
import Pedido from './screens/Pedido'

const Drawer = ({ route }) => {

    const { nombre } = route.params

    const MenuLateral = createDrawerNavigator()

    const perfilScreen = (
        <MenuLateral.Screen
            name="Tu perfil"
            initialParams={{ nombre: nombre }}
            component={Perfil}
        />
    )

    const ubicacionScreen = (
        <MenuLateral.Screen
            name="Llega a la granja"
            component={Ubicacion}
        />
    )

    const pedidosScreen = (
        <MenuLateral.Screen
            name="Haz tu pedido"
            component={Pedido}
        />
    )

    return (
        
        <MenuLateral.Navigator
            initialRouteName="perfil"
            drawerStyle={{
                backgroundColor: '#333',
            }}
            drawerContentOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#fff',
            }}
        >
            {pedidosScreen}
            {ubicacionScreen}
            {perfilScreen}
        </MenuLateral.Navigator>
    )
}

export default Drawer;
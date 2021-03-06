import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'

import Login from './src/views/Login'
import Drawer from './src/usuario/Drawer'

import PedidosState from './src/context/pedidos/useState'

const App = () => {

  const rootStack = createStackNavigator()

  return (
    <PedidosState>
      <NavigationContainer>
        <rootStack.Navigator>
          <rootStack.Screen
            name="Login"
            component={Login}
          />
          <rootStack.Screen
            name="Drawer"
            component={Drawer}
            options={{
              headerShown: false,
            }}
          />
        </rootStack.Navigator>
      </NavigationContainer>
    </PedidosState>
  );
}

export default App

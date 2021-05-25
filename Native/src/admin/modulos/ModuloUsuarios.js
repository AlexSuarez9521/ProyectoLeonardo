import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import UsuariosScreen from '../screens/usuarios/Usuarios'

const ModuloUsuarios = ({ navigation }) => {

    const Usuarios = createStackNavigator();

    return (
        
        <Usuarios.Navigator>
            <Usuarios.Screen 
                name="Usuarios"
                component={UsuariosScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}    
                        >
                            <Text> Cerrar Sesion </Text>
                        </TouchableOpacity>
                    )
                }}
            
            />
        </Usuarios.Navigator>

    );
}

export default ModuloUsuarios;
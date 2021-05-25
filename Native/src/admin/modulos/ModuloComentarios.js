import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactosScreen from '../screens/comentarios/Comentarios'

const ModuloComentarios = ({ navigation }) => {

    const Comentarios = createStackNavigator();

    return (
        
        <Comentarios.Navigator>
            <Comentarios.Screen 
                name="Contactos"
                component={ContactosScreen}
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
        </Comentarios.Navigator>

    );
}

export default ModuloComentarios;
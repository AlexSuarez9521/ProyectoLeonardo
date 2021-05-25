import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactosScreen from '../screens/contactos/Contactos'

const ModuloContactos = ({ navigation }) => {

    const Contactos = createStackNavigator();

    return (
        
        <Contactos.Navigator>
            <Contactos.Screen 
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
        </Contactos.Navigator>

    );
}

export default ModuloContactos;
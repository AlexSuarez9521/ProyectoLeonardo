import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GaleriaScreen from '../screens/galeria/Galeria'

const ModuloGaleria = ({ navigation }) => {

    const Galeria = createStackNavigator();

    return (
        
        <Galeria.Navigator>
            <Galeria.Screen 
                name="Galeria"
                component={GaleriaScreen}
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
        </Galeria.Navigator>

    );
}

export default ModuloGaleria;
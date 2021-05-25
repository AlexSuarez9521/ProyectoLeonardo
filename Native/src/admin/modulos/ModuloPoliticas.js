import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PoliticasScreen from '../screens/politicas/Politicas'

const ModuloPoliticas = ({ navigation }) => {

    const Politicas = createStackNavigator();

    return (
        
        <Politicas.Navigator>
            <Politicas.Screen 
                name="Politicas"
                component={PoliticasScreen}
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
        </Politicas.Navigator>

    );
}

export default ModuloPoliticas;
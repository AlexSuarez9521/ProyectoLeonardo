import React, { useState } from 'react';
import ClienteAxios from '../../config/server';
import Input from '../componentes/Input'
import Button from '../componentes/Button'
import { View, StyleSheet, ScrollView } from 'react-native';

const Login = ({ navigation }) => {

    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');

    const onPress = async () => {
        if (nombre === '' || password === '') {
            console.log("Todos los campos del formulario son obligatorios")
        } else {
            const response = await ClienteAxios.post("/user/login", {
                nombre,
                contra: password
            })
            console.log(response.data.usuario[0].id_rol)
            if (response.data.usuario[0].id_rol == 1) {
                navigation.navigate("Menu")
            } else {
                navigation.navigate("User")
            }
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <Input 
                    label="Nombre"
                    onChangeText={(value) => setNombre(value)}
                />
                <Input 
                    label="Contraseña"
                    onChangeText={(value) => setPassword(value)}
                />

                <Button
                    onPress={onPress}
                    label="INICIAR SESION"
                />

                <Button 
                    onPress={() => navigation.navigate("Registro")}
                    label="REGISTRARSE"
                />


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", margin: 20 },
    input: { marginVertical: 10, width: 300, borderRadius: 20, borderWidth: 3, borderColor: "#000" },
    btnLogin: { marginVertical: 30, width: 90, borderRadius: 20, borderWidth: 3, borderColor: "#000" },
    texto: { color: "#0511FC", fontWeight: "bold", fontSize: 16 },
    textoBoton: { color: "#080", fontWeight: "bold", fontSize: 16 }
});

export default Login;
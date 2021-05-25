import React, { useState } from 'react'
import ClienteAxios from '../../config/server'
import Input from '../componentes/Input'
import Button from '../componentes/Button'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native'

const Registro = ({ navigation }) => {

    const [nombre, setNombre] = useState('')
    const [cedula, setCedula] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')
    const [idRol, setIdRol] = useState(2);

    const onPress = async () => {
        if (nombre === '' || cell === '' || direccion === '' || email === '' || password === '') {
            console.log("Todos los campos del formulario son obligatorios")
        } else {
            const response = await ClienteAxios.post("/usuarios", {
                nombre, 
                cedula,
                telefono,
                contra: password,
                password,
                id_rol: idRol
            })
            console.log(response.data);
            navigation.navigate("Login");
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
                    label="Cedula"
                    onChangeText={(value) => setCedula(value)}
                />

                <Input 
                    label="Telefono"
                    onChangeText={(value) => setTelefono(value)}
                />

                <Input 
                    label="Contraseña"
                    onChangeText={(value) => setPassword(value)}
                />

                <Button 
                    label="REGISTRARSE"
                    onPress={onPress}
                />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", margin: 20 },
    input: { marginVertical: 10, width: 300, borderRadius: 20, borderWidth: 3, borderColor: "#000" },
    btnRegistro: { marginVertical: 30, width: 90, borderRadius: 20, borderWidth: 3, borderColor: "#000" },
    texto: { color: "#0511FC", fontWeight: "bold", fontSize: 16 },
    textoBoton: { color: "#080", fontWeight: "bold", fontSize: 16 }
});

export default Registro;
import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Colors } from 'react-native-paper'
import Input from '../../componentes/Input'
import ClienteAxios from '../../../config/server'

const AgregarContacto = () => {

    const [correo, setCorreo] = useState('')
    const [mensaje, setMensaje] = useState('')

    const onPress = async () => {
        try {
            if (correo === '' || mensaje === '') {
                console.log("todos los campos son obligatorios")
            } else {
                await ClienteAxios.post("/contacto", {
                    correo,
                    mensaje
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView>
            <View>
                <Input
                    label="Correo"
                    onChangeText={(value) => setCorreo(value)}
                />
                <Input
                    label="Mensaje"
                    onChangeText={(value) => setMensaje(value)}
                />

                <Button
                    style={{ marginTop: 90 }}
                    icon="content-save"
                    color={Colors.blue200}
                    mode="contained"
                    onPress={onPress}
                >
                    Agregar contacto
            </Button>

            </View>
        </ScrollView>
    )
}

export default AgregarContacto

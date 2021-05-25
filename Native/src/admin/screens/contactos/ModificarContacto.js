import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Colors } from 'react-native-paper'
import Input from '../../componentes/Input'
import ClienteAxios from '../../../config/server';

const ModificarUsuario = ({ route }) => {

    const [correo, setCorreo] = useState(route.params.correo_mensaje)
    const [mensaje, setMensaje] = useState(route.params.mensaje_contacto)

    const onPress = async () => {
        try {
            await ClienteAxios.put(`/contacto/${route.params.id_formulario_contacto}`, {
                correo,
                mensaje
            })
        } catch (error) {
            console.log()
        }
    }

    return (
        <ScrollView>
            <View>
                <Input
                    label="Correo"
                    value={correo}
                    onChangeText={(value) => setCorreo(value)}
                />
                <Input
                    label="Mensaje"
                    value={mensaje}
                    onChangeText={(value) => setMensaje(value)}
                />

                <Button
                    style={{ marginTop: 90 }}
                    icon="content-save"
                    color={Colors.blue200}
                    mode="contained"
                    onPress={onPress}
                >
                    Modificar Contacto
            </Button>

            </View>
        </ScrollView>
    )
}

export default ModificarUsuario

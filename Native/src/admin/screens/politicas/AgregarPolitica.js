import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Colors } from 'react-native-paper'
import Input from '../../componentes/Input'
import ClienteAxios from '../../../config/server'

const AgregarPolitica = () => {

    const [descripcion, setDescripcion] = useState('')

    const onPress = async () => {
        try {
            if (descripcion === '') {
                console.log("todos los campos son obligatorios")
            } else {
                await ClienteAxios.post("/politicas", {
                    descripcion
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
                    label="Politica"
                    onChangeText={(value) => setDescripcion(value)}
                />

                <Button
                    style={{ marginTop: 90 }}
                    icon="content-save"
                    color={Colors.blue200}
                    mode="contained"
                    onPress={onPress}
                >
                    Agregar Politica
            </Button>

            </View>
        </ScrollView>
    )
}

export default AgregarPolitica

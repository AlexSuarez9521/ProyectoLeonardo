import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Colors } from 'react-native-paper'
import Input from '../../componentes/Input'
import ClienteAxios from '../../../config/server'

const AgregarGaleria = () => {

    const [imagen, setImagen] = useState('')

    const onPress = async () => {
        try {
            if (imagen === '') {
                console.log("todos los campos son obligatorios")
            } else {
                await ClienteAxios.post("/galeria", {
                    imagen
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
                    label="Imagen"
                    onChangeText={(value) => setImagen(value)}
                />

                <Button
                    style={{ marginTop: 90 }}
                    icon="content-save"
                    color={Colors.blue200}
                    mode="contained"
                    onPress={onPress}
                >
                    Agregar Imagen
            </Button>

            </View>
        </ScrollView>
    )
}

export default AgregarGaleria

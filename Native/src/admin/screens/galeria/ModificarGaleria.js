import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Colors } from 'react-native-paper'
import Input from '../../componentes/Input'
import ClienteAxios from '../../../config/server';

const ModificarGaleria = ({ route }) => {

    const [imagen, setImagen] = useState(route.params.imagen)

    const onPress = async () => {
        try {
            await ClienteAxios.put(`/galeria/${route.params.id_galeria}`, {
                imagen
            })
        } catch (error) {
            console.log()
        }
    }

    return (
        <ScrollView>
            <View>
                <Input
                    label="Imagen"
                    value={imagen}
                    onChangeText={(value) => setImagen(value)}
                />

                <Button
                    style={{ marginTop: 90 }}
                    icon="content-save"
                    color={Colors.blue200}
                    mode="contained"
                    onPress={onPress}
                >
                    Modificar Imagen
            </Button>

            </View>
        </ScrollView>
    )
}

export default ModificarGaleria

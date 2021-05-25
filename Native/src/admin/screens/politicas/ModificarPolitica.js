import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Colors } from 'react-native-paper'
import Input from '../../componentes/Input'
import ClienteAxios from '../../../config/server';

const ModificarPolitica = ({ route }) => {

    const [descripcion, setDescripcion] = useState(route.params.descripcion)

    const onPress = async () => {
        try {
            await ClienteAxios.put(`/politicas/${route.params.id_terminos_condiciones}`, {
                descripcion
            })
        } catch (error) {
            console.log()
        }
    }

    return (
        <ScrollView>
            <View>
                <Input
                    label="Politica"
                    value={descripcion}
                    onChangeText={(value) => setDescripcion(value)}
                />

                <Button
                    style={{ marginTop: 90 }}
                    icon="content-save"
                    color={Colors.blue200}
                    mode="contained"
                    onPress={onPress}
                >
                    Modificar Politica
            </Button>

            </View>
        </ScrollView>
    )
}

export default ModificarPolitica

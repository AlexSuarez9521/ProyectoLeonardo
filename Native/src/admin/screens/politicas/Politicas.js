import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DataTable, IconButton, Button, Colors } from 'react-native-paper';
import ClienteAxios from '../../../config/server'

export default function Politicas({ navigation }) {

    const [politicas, setPoliticas] = useState([])

    const ListarPoliticas = async () => {
        try {
            const response = await ClienteAxios.get("/politicas")
            setPoliticas(response.data.politicas)
        } catch (error) {
            console.log(error)
        }
    }

    const EliminarPolitica = async (id) => {
        try {
            await ClienteAxios.delete(`/politicas/${id}`)
            setPoliticas(politicas.filter(politica => politica.id_terminos_condiciones !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const ObtenerDatosPolitica = async (id) => {
        try {
            const politica = politicas.filter(politica => politica.id_terminos_condiciones === id)
            navigation.navigate("Menu/modificar/politica", {
                id_terminos_condiciones: politica[0].id_terminos_condiciones,
                descripcion: politica[0].descripcion,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ListarPoliticas()
    }, [])

    return (
        <View>
            <Button 
                icon="camera" 
                color={Colors.blue200}
                mode="contained" 
                onPress={() => navigation.navigate("Menu/agregar/politica")}
            >
                Agregar Politica
            </Button>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Descripcion</DataTable.Title>
                    <DataTable.Title>Acciones</DataTable.Title>
                </DataTable.Header>
                {politicas ?
                    politicas.map(politica => {
                        return (
                            <DataTable.Row key={politica.id_terminos_condiciones}>
                                <DataTable.Cell>{politica.descripcion}</DataTable.Cell>
                                <DataTable.Cell>
                                    <IconButton
                                        icon="trash-can-outline"
                                        color={Colors.red900}
                                        size={20}
                                        onPress={() => EliminarPolitica(politica.id_terminos_condiciones)}
                                    />
                                    <IconButton
                                        icon="square-edit-outline"
                                        color={Colors.green900}
                                        size={20}
                                        onPress={() => ObtenerDatosPolitica(politica.id_terminos_condiciones)}
                                    />
                                </DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                    : <Text>No hay contactos</Text>}
            </DataTable>
        </View >
    )
}

const styles = StyleSheet.create({})

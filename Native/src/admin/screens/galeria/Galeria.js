import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DataTable, IconButton, Button, Colors } from 'react-native-paper';
import ClienteAxios from '../../../config/server'

export default function Galeria({ navigation }) {

    const [galeria, setGaleria] = useState([])

    const ListarGaleria = async () => {
        try {
            const response = await ClienteAxios.get("/galeria")
            setGaleria(response.data.imagenes)
        } catch (error) {
            console.log(error)
        }
    }

    const EliminarImagen = async (id) => {
        try {
            await ClienteAxios.delete(`/galeria/${id}`)
            setGaleria(galeria.filter(imagen => imagen.id_galeria !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const ObtenerDatosImagen = async (id) => {
        try {
            const imagen = galeria.filter(imagen => imagen.id_galeria === id)
            navigation.navigate("Menu/modificar/galeria", {
                id_galeria: imagen[0].id_galeria,
                imagen: imagen[0].imagen,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ListarGaleria()
    }, [])

    return (
        <View>
            <Button 
                icon="camera" 
                color={Colors.blue200}
                mode="contained" 
                onPress={() => navigation.navigate("Menu/agregar/galeria")}
            >
                Agregar Imagen
            </Button>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Imagen</DataTable.Title>
                    <DataTable.Title>Acciones</DataTable.Title>
                </DataTable.Header>
                {galeria ?
                    galeria.map(imagen => {
                        return (
                            <DataTable.Row key={imagen.id_galeria}>
                                <DataTable.Cell>
                                    <Image 
                                        style={styles.tinyLogo}
                                        source={{ uri: imagen.imagen }}
                                    />
                                </DataTable.Cell>
                                <DataTable.Cell>
                                    <IconButton
                                        icon="trash-can-outline"
                                        color={Colors.red900}
                                        size={20}
                                        onPress={() => EliminarImagen(imagen.id_galeria)}
                                    />
                                    <IconButton
                                        icon="square-edit-outline"
                                        color={Colors.green900}
                                        size={20}
                                        onPress={() => ObtenerDatosImagen(imagen.id_galeria)}
                                    />
                                </DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                    : <Text>No hay imagenes</Text>}
            </DataTable>
        </View >
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },
})
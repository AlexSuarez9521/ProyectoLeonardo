import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DataTable, IconButton, Button, Colors } from 'react-native-paper';
import ClienteAxios from '../../../config/server'

export default function Comentarios({ navigation }) {

    const [comentarios, setComentarios] = useState([])

    const ListarComentarios = async () => {
        try {
            const response = await ClienteAxios.get("/comentario")
            setComentarios(response.data.comentarios)
        } catch (error) {
            console.log(error)
        }
    }

    const EliminarComentario = async (id) => {
        try {
            await ClienteAxios.delete(`/comentario/${id}`)
            setComentarios(comentarios.filter(comentario => comentario.id_comentario !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const ObtenerDatosComentario = async (id) => {
        try {
            const comentario = comentarios.filter(comentario => comentario.id_comentario === id)
            navigation.navigate("Menu/modificar/comentario", {
                idComentario: comentario[0].id_comentario,
                idProducto: comentario[0].id_producto,
                descripcion: comentario[0].descripcion,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ListarComentarios()
    }, [])

    return (
        <View>
            <Button 
                icon="camera" 
                color={Colors.blue200}
                mode="contained" 
                onPress={() => navigation.navigate("Menu/agregar/comentario")}
            >
                Agregar Comentario
            </Button>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Producto</DataTable.Title>
                    <DataTable.Title>Comentario</DataTable.Title>
                    <DataTable.Title>Acciones</DataTable.Title>
                </DataTable.Header>
                {comentarios ?
                    comentarios.map(comentario => {
                        return (
                            <DataTable.Row key={comentario.id_comentario}>
                                <DataTable.Cell>{comentario.nombre}</DataTable.Cell>
                                <DataTable.Cell>{comentario.descripcion}</DataTable.Cell>
                                <DataTable.Cell>
                                    <IconButton
                                        icon="trash-can-outline"
                                        color={Colors.red900}
                                        size={20}
                                        onPress={() => EliminarComentario(comentario.id_comentario)}
                                    />
                                    <IconButton
                                        icon="square-edit-outline"
                                        color={Colors.green900}
                                        size={20}
                                        onPress={() => ObtenerDatosComentario(comentario.id_comentario)}
                                    />
                                </DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                    : <Text>No hay comentarios</Text>}
            </DataTable>
        </View >
    )
}

const styles = StyleSheet.create({})

import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DataTable, IconButton, Button, Colors } from 'react-native-paper';
import ClienteAxios from '../../../config/server'

export default function Usuarios({ navigation }) {

    const [usuarios, setUsuarios] = useState([])

    const ListarUsuarios = async () => {
        try {
            const response = await ClienteAxios.get("/user")
            setUsuarios(response.data.usuarios)
        } catch (error) {
            console.log(error)
        }
    }

    const EliminarUsuario = async (id) => {
        try {
            await ClienteAxios.delete(`/user/${id}`)
            setUsuarios(usuarios.filter(usuario => usuario.id_usuario !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const ObtenerDatosUsuario = async (id) => {
        try {
            const usuario = usuarios.filter(usuario => usuario.id_usuario === id)
            navigation.navigate("Menu/modificar/usuario", {
                id_usuario: usuario[0].id_usuario,
                nombre_usuario: usuario[0].nombre,
                cedula_usuario: usuario[0].cedula,
                telefono_usuario: usuario[0].telefono,
                contra_usuario: usuario[0].contra,
                rol: usuario[0].id_rol
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ListarUsuarios()
    }, [])

    return (
        <View>
            <Button 
                icon="camera" 
                color={Colors.blue200}
                mode="contained" 
                onPress={() => navigation.navigate("Menu/agregar/usuario")}
            >
                Agregar usuario
            </Button>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Nombre</DataTable.Title>
                    <DataTable.Title>Cedula</DataTable.Title>
                    <DataTable.Title>Rol</DataTable.Title>
                    <DataTable.Title>Acciones</DataTable.Title>
                </DataTable.Header>
                {usuarios ?
                    usuarios.map(usuario => {
                        return (
                            <DataTable.Row key={usuario.id_usuario}>
                                <DataTable.Cell>{usuario.nombre}</DataTable.Cell>
                                <DataTable.Cell>{usuario.cedula}</DataTable.Cell>
                                <DataTable.Cell>{usuario.descripcion}</DataTable.Cell>
                                <DataTable.Cell>
                                    <IconButton
                                        icon="trash-can-outline"
                                        color={Colors.red900}
                                        size={20}
                                        onPress={() => EliminarUsuario(usuario.id_usuario)}
                                    />
                                    <IconButton
                                        icon="square-edit-outline"
                                        color={Colors.green900}
                                        size={20}
                                        onPress={() => ObtenerDatosUsuario(usuario.id_usuario)}
                                    />
                                </DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                    : <Text>No hay usuarios</Text>}
            </DataTable>
        </View >
    )
}

const styles = StyleSheet.create({})

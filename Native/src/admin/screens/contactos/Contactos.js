import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DataTable, IconButton, Button, Colors } from 'react-native-paper';
import ClienteAxios from '../../../config/server'

export default function Contactos({ navigation }) {

    const [contactos, setContactos] = useState([])

    const ListarContactos = async () => {
        try {
            const response = await ClienteAxios.get("/contacto")
            setContactos(response.data.contactos)
        } catch (error) {
            console.log(error)
        }
    }

    const EliminarContacto = async (id) => {
        try {
            await ClienteAxios.delete(`/contacto/${id}`)
            setContactos(contactos.filter(contacto => contacto.id_formulario_contacto !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const ObtenerDatosContacto = async (id) => {
        try {
            const contacto = contactos.filter(contacto => contacto.id_formulario_contacto === id)
            navigation.navigate("Menu/modificar/contacto", {
                id_formulario_contacto: contacto[0].id_formulario_contacto,
                mensaje_contacto: contacto[0].mensaje,
                correo_mensaje: contacto[0].correo,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ListarContactos()
    }, [])

    return (
        <View>
            <Button 
                icon="camera" 
                color={Colors.blue200}
                mode="contained" 
                onPress={() => navigation.navigate("Menu/agregar/contacto")}
            >
                Agregar Contacto
            </Button>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Correo</DataTable.Title>
                    <DataTable.Title>Mensaje</DataTable.Title>
                    <DataTable.Title>Acciones</DataTable.Title>
                </DataTable.Header>
                {contactos ?
                    contactos.map(contacto => {
                        return (
                            <DataTable.Row key={contacto.id_formulario_contacto}>
                                <DataTable.Cell>{contacto.correo}</DataTable.Cell>
                                <DataTable.Cell>{contacto.mensaje}</DataTable.Cell>
                                <DataTable.Cell>
                                    <IconButton
                                        icon="trash-can-outline"
                                        color={Colors.red900}
                                        size={20}
                                        onPress={() => EliminarContacto(contacto.id_formulario_contacto)}
                                    />
                                    <IconButton
                                        icon="square-edit-outline"
                                        color={Colors.green900}
                                        size={20}
                                        onPress={() => ObtenerDatosContacto(contacto.id_formulario_contacto)}
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

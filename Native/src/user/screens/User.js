import React, { useState, useEffect } from 'react'
import { View, Image, ScrollView, Dimensions, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph, Button, Colors } from 'react-native-paper';
import Input from '../componentes/Input'
import ClienteAxios from '../../config/server'

const User = () => {

    const [galeria, setGaleria] = useState([])
    const [productos, setProductos] = useState([])
    const [productoSeleccionado, setProductoSeleccionado] = useState([])

    const [correo, setCorreo] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [isVisibleModal, setIsVisibleModal] = useState(false)

    const MostrarImagenesGaleria = async () => {
        try {
            const response = await ClienteAxios.get("/galeria")
            setGaleria(response.data.imagenes)
        } catch (error) {
            console.log(error)
        }
    }

    const MostrarProductos = async () => {
        try {
            const response = await ClienteAxios.get("/producto")
            setProductos(response.data.productos)
        } catch (error) {
            console.log(error)
        }
    }

    const ListarComentariosPorProducto = async (id) => {
        try {
            const response = await ClienteAxios.get(`/comentario/producto/${id}`)
            setProductoSeleccionado(response.data.comentarios)
        } catch (error) {
            console.log(error)
        }
    }

    const MostarModalComentarios = (id) => {
        setIsVisibleModal(true)
        ListarComentariosPorProducto(id)
    }

    const onPress = async () => {
        try {
            if (correo === '' || mensaje === '') {
                console.log("todos los campos son obligatorios")
            } else {
                await ClienteAxios.post("/contacto", {
                    correo,
                    mensaje
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const AgregarComentario = async (id) => {
        try {

            await ClienteAxios.post("/comentario", {
                id_producto: id,
                descripcion: comentario
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        MostrarImagenesGaleria()
        MostrarProductos()
    }, [])

    return (
        <ScrollView>
            <View>
                <ScrollView
                    horizontal
                    style={styles.wrap}
                >
                    {galeria ?
                        galeria.map(data => {
                            return (
                                <Image
                                    key={data.id_galeria}
                                    resizeMode="stretch"
                                    style={styles.wrap}
                                    source={{ uri: data.imagen }}
                                />
                            )
                        })
                        : null}
                </ScrollView>
                {productos ?
                    productos.map(producto => {
                        return (
                            <View key={producto.id_producto}>
                                <Card>
                                    <Card.Content>
                                        <Title>Nombre Del Producto: {producto.nombre} {producto.id_producto}</Title>
                                        <Paragraph>Stock: ${producto.stock}</Paragraph>
                                        <Paragraph>Precio: ${producto.precio}</Paragraph>
                                    </Card.Content>
                                    <Card.Actions>
                                        <Button onPress={() => MostarModalComentarios(producto.id_producto)}>Ver comentarios</Button>
                                    </Card.Actions>
                                </Card>
                            </View>
                        )
                    })
                    : null}
                <Input
                    label="Correo"
                    onChangeText={(value) => setCorreo(value)}
                />
                <Input
                    label="Mensaje"
                    onChangeText={(value) => setMensaje(value)}
                />

                <Button
                    style={{ marginTop: 90 }}
                    icon="content-save"
                    color={Colors.blue200}
                    mode="contained"
                    onPress={onPress}
                >
                    Agregar contacto
                </Button>

                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isVisibleModal}
                >
                    <TouchableOpacity
                        disabled={true}
                        style={styles.container}
                    >
                        <View
                            style={styles.modal}
                        >
                            <TouchableOpacity onPress={() => setIsVisibleModal(false)}>
                                <Text>Cerrar</Text>
                            </TouchableOpacity>

                            <View style={{ marginTop: 10 }}>
                                {productoSeleccionado ?
                                    productoSeleccionado.map(producto => {
                                        return (
                                            <Text key={producto.id_comentario}>{producto.descripcion}</Text>
                                        )
                                    })
                                    : null}
                            </View>

                        </View>
                    </TouchableOpacity>
                </Modal>



            </View>
        </ScrollView>
    )
}

export default User

const styles = StyleSheet.create({
    wrap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.25,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: 300,
        width: Dimensions.get("window").width - 80,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10
    }
})
import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Colors } from 'react-native-paper'
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../../componentes/Input'
import ClienteAxios from '../../../config/server'

const AgregarComentario = () => {

    const [open, setOpen] = useState(false);

    const [items, setItems] = useState([]);
    const [id_producto, setIdProducto] = useState(null)
    const [descripcion, setDescripcion] = useState('')

    const ListarProductos = async () => {
        try {
            const productos = await ClienteAxios.get("/producto")
            for (let i = 0; i <= productos.data.productos.length; i++) {
                let item = {}
                item.label = productos.data.productos[i].nombre
                item.value = productos.data.productos[i].id_producto
                items.push(item)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ListarProductos()
    }, [])
    

    const onPress = async () => {
        try {
            await ClienteAxios.post("/comentario", {
                id_producto,
                descripcion
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView>
            <View>
                <Input
                    label="Comentario"
                    onChangeText={(value) => setDescripcion(value)}
                />

                <DropDownPicker
                    open={open}
                    value={id_producto}
                    items={items}
                    setOpen={setOpen}
                    setValue={setIdProducto}
                    setItems={setItems}
                />

                <Button
                    style={{ marginTop: 90 }}
                    icon="content-save"
                    color={Colors.blue200}
                    mode="contained"
                    onPress={onPress}
                >
                    Agregar Comentario
            </Button>

            </View>
        </ScrollView>
    )
}

export default AgregarComentario

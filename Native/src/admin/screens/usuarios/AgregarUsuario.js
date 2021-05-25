import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Colors } from 'react-native-paper'
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../../componentes/Input'
import ClienteAxios from '../../../config/server'

const AgregarUsuario = () => {

    const [open, setOpen] = useState(false);

    const [nombre, setNombre] = useState('')
    const [cedula, setCedula] = useState('')
    const [telefono, setTelefono] = useState('')
    const [contra, setContra] = useState('')
    const [id_rol, setIdRol] = useState(2)
    const [items, setItems] = useState([
        { label: 'Admin', value: 1 },
        { label: 'User', value: 2 }
    ]);

    const onPress = async () => {
        try {
            if (nombre === '' || cedula === '' || telefono === '' || contra === '') {
                console.log("todos los campos son obligatorios")
            } else {
                await ClienteAxios.post("/user", {
                    nombre,
                    cedula,
                    telefono,
                    contra,
                    id_rol
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
                    label="Nombre"
                    onChangeText={(value) => setNombre(value)}
                />
                <Input
                    label="Cedula"
                    onChangeText={(value) => setCedula(value)}
                />
                <Input
                    label="Telefono"
                    onChangeText={(value) => setTelefono(value)}
                />
                <Input
                    label="Contraseña"
                    onChangeText={(value) => setContra(value)}
                />


                <DropDownPicker
                    open={open}
                    value={id_rol}
                    items={items}
                    setOpen={setOpen}
                    setValue={setIdRol}
                    setItems={setItems}
                />

                <Button
                    style={{ marginTop: 90 }}
                    icon="content-save"
                    color={Colors.blue200}
                    mode="contained"
                    onPress={onPress}
                >
                    Agregar usuario
            </Button>

            </View>
        </ScrollView>
    )
}

export default AgregarUsuario

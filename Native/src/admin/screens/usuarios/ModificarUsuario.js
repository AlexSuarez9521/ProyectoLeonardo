import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Colors } from 'react-native-paper'
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../../componentes/Input'
import ClienteAxios from '../../../config/server';

const ModificarUsuario = ({ route }) => {

    const [open, setOpen] = useState(false);

    const [nombre, setNombre] = useState(route.params.nombre_usuario)
    const [cedula, setCedula] = useState(route.params.cedula_usuario)
    const [telefono, setTelefono] = useState(route.params.telefono_usuario)
    const [contra, setContra] = useState(route.params.contra_usuario)
    const [id_rol, setIdRol] = useState(route.params.rol);
    const [items, setItems] = useState([
        { label: 'Admin', value: 1 },
        { label: 'User', value: 2 }
    ]);

    const onPress = async () => {
        try {
            await ClienteAxios.put(`/user/${route.params.id_usuario}`, {
                nombre,
                cedula,
                telefono,
                contra,
                id_rol
            })
        } catch (error) {
            console.log()
        }
    }

    return (
        <ScrollView>
            <View>
                <Input
                    label="Nombre"
                    value={nombre}
                    onChangeText={(value) => setNombre(value)}
                />
                <Input
                    label="Cedula"
                    value={cedula}
                    onChangeText={(value) => setCedula(value)}
                />
                <Input
                    label="Telefono"
                    value={telefono}
                    onChangeText={(value) => setTelefono(value)}
                />
                <Input
                    label="Contraseña"
                    value={contra}
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
                    Modificar Usuario
            </Button>

            </View>
        </ScrollView>
    )
}

export default ModificarUsuario

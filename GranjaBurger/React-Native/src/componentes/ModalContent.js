import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import CloseIcon from '../img/cerrar.png'
import ModalStyles from '../styles/ModalStyles'

const ModalContent = ({ onPress, comida }) => {

    const costo_unitario = parseInt(JSON.stringify(comida[0].precio))

    const [precio, setPrecio] = useState(costo_unitario)
    const [cantidad, setCantidad] = useState(1)

    const DisminuirCantidad = () => {
        setCantidad(cantidad > 1 ? cantidad - 1 : cantidad)
        setPrecio(precio == costo_unitario ? costo_unitario : precio - costo_unitario)
    }
    const AumentarCantidad = () => {
        setCantidad(cantidad + 1)
        setPrecio(precio + costo_unitario)
    }

    return (
        <View style={ModalStyles.container}>
            <View style={ModalStyles.modal}>
                <TouchableOpacity
                    onPress={onPress}
                    style={ModalStyles.btnClose}
                >
                    <Image
                        source={CloseIcon}
                        style={ModalStyles.closeIcon}
                    />
                </TouchableOpacity>
                {comida.map(item => {
                    return (
                        <View key={item.id_carta}>
                            <View style={ModalStyles.viewImagenComida}>
                                <Image
                                    source={{ uri: item.imagen }}
                                    style={ModalStyles.imgComida}
                                />
                            </View>
                            <Text style={ModalStyles.textNombre}>{item.nombre}</Text>
                            <Text style={ModalStyles.textDescripcion}>{item.descripcion} {item.descripcion} {item.descripcion} {item.descripcion} {item.descripcion}</Text>

                            {item.id_categoria == 1 ?
                                <View style={ModalStyles.opciones}>
                                    <View style={ModalStyles.adiciones}>

                                    </View>
                                    <View style={ModalStyles.quitar}>

                                    </View>
                                </View>
                                : null}

                            {item.id_categoria == 2 || item.id_categoria == 3 ?
                                <View style={ModalStyles.opciones}>
                                    <View style={ModalStyles.adiciones}>

                                    </View>
                                    <View style={ModalStyles.quitar}>

                                    </View>
                                </View>
                                : null}

                            <View style={ModalStyles.viewPrecio}>
                                <Text style={ModalStyles.textPrecio}>$ {precio}</Text>
                                <TouchableOpacity
                                    style={ModalStyles.btnMenos}
                                    onPress={DisminuirCantidad}
                                >
                                    <Text style={ModalStyles.textButton}>-</Text>
                                </TouchableOpacity>
                                <View style={ModalStyles.viewCantidad}>
                                    <Text style={ModalStyles.textCantidad}>{cantidad}</Text>
                                </View>
                                <TouchableOpacity
                                    style={ModalStyles.btnMas}
                                    onPress={AumentarCantidad}
                                >
                                    <Text style={ModalStyles.textButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
                <TouchableOpacity
                    onPress={() => console.log("agregar pedido")}
                    style={ModalStyles.btnAgregar}
                >
                    <Text style={ModalStyles.textAgregar}>AGREGAR AL PEDIDO</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalContent

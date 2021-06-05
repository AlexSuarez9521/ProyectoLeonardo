import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import CloseIcon from '../img/cerrar.png'
import ModalStyles from '../styles/ModalStyles'

const ModalPedido = ({ onPress, pedido }) => {

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
                <Text>Modal pedido</Text>
                <Text>{JSON.stringify(pedido)}</Text>
            </View>
        </View>
    )
}

export default ModalPedido

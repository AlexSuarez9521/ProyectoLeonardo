import React from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import ModalStyles from '../styles/ModalStyles'

const ModalContent = ({ onPress, comida }) => {
    return (
        <View style={ModalStyles.container}>
            <View style={ModalStyles.modal}>
                <TouchableOpacity 
                    onPress={onPress}
                    style={ModalStyles.btnClose}
                >
                    <Text style={ModalStyles.textClose}>X</Text>
                </TouchableOpacity>
                <Text>Contenido</Text>
                <Text>{JSON.stringify(comida)}</Text>
            </View>
        </View>
    )
}

export default ModalContent

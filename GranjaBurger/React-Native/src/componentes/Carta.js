import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import CartaStyles from '../styles/CartaStyles'

const Carta = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={CartaStyles.container}>
                <View style={CartaStyles.viewImg}>
                    <Image 
                        source={{ uri: item.imagen }}
                        style={CartaStyles.img} 
                    />
                </View>
                <View style={CartaStyles.viewDescripcion}>
                    <Text style={CartaStyles.tituloText}>{item.nombre}</Text>
                    <Text style={CartaStyles.descripcionText}>{item.descripcion}</Text>
                    <Text style={CartaStyles.precioText}> $ {item.precio} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Carta

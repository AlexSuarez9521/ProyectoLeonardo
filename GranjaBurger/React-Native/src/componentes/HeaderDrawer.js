import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import HeaderDrawerStyles from '../styles/HeaderDrawerStyles'
import IconMenu from '../img/lista.png'

const HeaderDrawer = ({ onPress, title }) => {
    return (
        <View style={HeaderDrawerStyles.menu}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={IconMenu}
                    style={HeaderDrawerStyles.image}
                />
            </TouchableOpacity>
            <Text style={HeaderDrawerStyles.title}>{title}</Text>
        </View>
    )
}

export default HeaderDrawer
import React from 'react'
import { View, Text, Image } from 'react-native'
import LabelItemDropdownStyles from '../styles/LabelItemDropdownStyles'

const LabelItemDropdown = ({ icon, text }) => {
    return (
        <View style={LabelItemDropdownStyles.label}>
            <Image
                source={icon}
                style={LabelItemDropdownStyles.imgItem}
            />
            <Text style={LabelItemDropdownStyles.textItem}>{text}</Text>
        </View>
    )
}

export default LabelItemDropdown

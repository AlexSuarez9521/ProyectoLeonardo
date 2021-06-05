import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'
import CheckboxStyles from '../styles/CheckboxStyles'

const Caja = ({ state, onPress, text }) => {
    return (
        <View style={CheckboxStyles.checkboxView}>
            <Checkbox
                status={state ? 'checked' : 'unchecked'}
                onPress={onPress}
            />
            <Text style={CheckboxStyles.textCheckBox}>{text}</Text>
        </View>
    )
}

export default Caja
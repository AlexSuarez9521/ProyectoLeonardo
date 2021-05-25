import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, label }) => {
    return (
        <TouchableOpacity style={styles.btnLogin} onPress={onPress} >
            <Text style={styles.textoBoton}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnLogin: { marginVertical: 30, width: 90, borderRadius: 20, borderWidth: 3, borderColor: "#000" },
    textoBoton: { color: "#080", fontWeight: "bold", fontSize: 16 }
});
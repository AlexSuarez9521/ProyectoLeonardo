import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ label, onChangeText }) => {
    return (
        <>
            <Text style={styles.texto}>{label}: </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
            />
        </>
    )
}

export default Input

const styles = StyleSheet.create({
    input: { marginVertical: 10, width: 300, borderRadius: 20, borderWidth: 3, borderColor: "#000" },
    texto: { color: "#0511FC", fontWeight: "bold", fontSize: 16 },
});

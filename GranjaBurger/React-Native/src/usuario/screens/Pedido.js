import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'
import AndroidSafeArea from '../../styles/AndroidSafeArea'
import HeaderDrawer from '../../componentes/HeaderDrawer'
import Banner from '../../componentes/Banner'

const Pedido = ({ navigation }) => {
    return (
        <SafeAreaView style={AndroidSafeArea.droidSafeArea}>
            <HeaderDrawer 
                onPress={() => navigation.toggleDrawer()} 
                title="Pedidos"
            />
            <Banner 
                title="HAZ TU PEDIDO"
            />
            <Text>Pedido</Text>
        </SafeAreaView>
    )
}

export default Pedido

const styles = StyleSheet.create({
    banner: {
        flex: 1,
        width: '100%',
        height: 400,
        backgroundColor: '#333'
    },
    icon: {
        width: 40,
        height: 40,
        backgroundColor: '#aaff00'
    }
})
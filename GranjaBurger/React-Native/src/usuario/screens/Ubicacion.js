import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import AndroidSafeArea from '../../styles/AndroidSafeArea'
import HeaderDrawer from '../../componentes/HeaderDrawer'
import Banner from '../../componentes/Banner'

const Pedido = ({ navigation }) => {
    return (
        <SafeAreaView style={AndroidSafeArea.droidSafeArea}>
            <HeaderDrawer 
                onPress={() => navigation.toggleDrawer()} 
                title="Mapas"
            />
            <Banner 
                title="LLEGA A LA GRANJA"
            />
            <Text>Ubicacion</Text>
        </SafeAreaView>
    )
}

export default Pedido
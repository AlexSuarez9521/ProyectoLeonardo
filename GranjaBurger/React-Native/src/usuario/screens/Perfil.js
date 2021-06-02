import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import AndroidSafeArea from '../../styles/AndroidSafeArea'
import HeaderDrawer from '../../componentes/HeaderDrawer'
import Banner from '../../componentes/Banner'

const Perfil = ({ route, navigation }) => {

    const { nombre } = route.params

    return (
        <SafeAreaView style={AndroidSafeArea.droidSafeArea}>
            <HeaderDrawer 
                onPress={() => navigation.toggleDrawer()} 
                title="Tu perfil"
            />
            <Banner 
                title="TU PERFIL"
            />
            <Text>Perfil</Text>
            <Text>{nombre}</Text>
        </SafeAreaView>
    )
}

export default Perfil
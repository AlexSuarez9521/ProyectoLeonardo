import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import LabelItemDropdown from '../../componentes/LabelItemDropdown'
import AndroidSafeArea from '../../styles/AndroidSafeArea'
import HeaderDrawer from '../../componentes/HeaderDrawer'
import Banner from '../../componentes/Banner'

import IconHamburguesa from '../../img/item-1.png'
import IconPerroCaliente from '../../img/item-2.png'

const Pedido = ({ navigation }) => {

    DropDownPicker.setTheme("DARK")

    const itemsPedidos = [
        {
            label: <LabelItemDropdown icon={IconHamburguesa} text="Hamburguesas" />,
            value: 1
        },
        {
            label: <LabelItemDropdown icon={IconPerroCaliente} text="Sandwichs" />,
            value: 2
        },
        {
            label: <LabelItemDropdown icon={IconHamburguesa} text="Perros" />,
            value: 3
        },
        {
            label: <LabelItemDropdown icon={IconPerroCaliente} text="Otros" />,
            value: 4
        },
        {
            label: <LabelItemDropdown icon={IconHamburguesa} text="Acompañantes" />,
            value: 5
        },
        {
            label: <LabelItemDropdown icon={IconHamburguesa} text="Bebidas" />,
            value: 6
        },
    ]

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(1);
    const [items, setItems] = useState(itemsPedidos);

    return (
        <SafeAreaView style={AndroidSafeArea.droidSafeArea}>
            <HeaderDrawer
                onPress={() => navigation.toggleDrawer()}
                title="Pedidos"
            />
            <Banner
                title="HAZ TU PEDIDO"
            />
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <ScrollView>
                
            </ScrollView>
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
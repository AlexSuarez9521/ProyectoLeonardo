import React, { useState, useEffect, useContext } from 'react'
import { SafeAreaView, ScrollView, Text, Modal, TouchableOpacity } from 'react-native'
import ModalStyles from '../../styles/ModalStyles'
import Carta from '../../componentes/Carta'
import ModalContent from '../../componentes/ModalContent'
import ModalPedido from '../../componentes/ModalPedido'
import DropDownPicker from 'react-native-dropdown-picker'
import LabelItemDropdown from '../../componentes/LabelItemDropdown'
import AndroidSafeArea from '../../styles/AndroidSafeArea'
import HeaderDrawer from '../../componentes/HeaderDrawer'
import Banner from '../../componentes/Banner'

import PedidosContext from '../../context/pedidos/useContext'

import IconHamburguesa from '../../img/item-1.png'
import IconPerroCaliente from '../../img/item-2.png'

const Pedido = ({ navigation }) => {

    const pedidosContext = useContext(PedidosContext)
    const { carta, comida, pedido, ListarCartaPorCategoria, ConsultarComidaSeleccionada, ListarPedido } = pedidosContext

    const [modal, setModal] = useState(false)
    const [modalPedido, setModalPedido] = useState(false)
    const [value, setValue] = useState(1)

    const AbrirModal = (id) => {
        ConsultarComidaSeleccionada(id)
        setModal(true)
    }

    const CerrarModal = () => {
        setModal(false)
    }

    const AbrirModalPedido = () => {
        setModalPedido(true)
    }

    const CerrarModalPedido = () => {
        setModalPedido(false)
    }

    const mostrarModal = (
        <Modal
            transparent={true}
            animationType="fade"
            visible={modal}
        >
            <ModalContent onPress={CerrarModal} comida={comida} />
        </Modal>
    )

    const mostrarModalPedido = (
        <Modal
            transparent={true}
            animationType="fade"
            visible={modalPedido}
        >
            <ModalPedido onPress={CerrarModalPedido} pedido={pedido} />
        </Modal>
    )

    useEffect(() => {
        ListarCartaPorCategoria(value)
        ListarPedido()
    }, [])

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
                onChangeValue={(value) => ListarCartaPorCategoria(value)}
            />
            <ScrollView>
                {
                    carta.length === 0
                        ? <Text>No hay disponibles</Text>
                        :
                        carta.map(item => {
                            return (
                                <Carta
                                    key={item.id_carta}
                                    item={item}
                                    onPress={() => AbrirModal(item.id_carta)}
                                />
                            )
                        })
                }
            </ScrollView>
            {mostrarModal}
            {mostrarModalPedido}
            <TouchableOpacity
                onPress={AbrirModalPedido}
                style={ModalStyles.btnAgregar}
            >
                <Text style={ModalStyles.textAgregar}>TU PEDIDO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Pedido
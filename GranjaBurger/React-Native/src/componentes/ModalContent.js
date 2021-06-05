import React, { useState, useContext } from 'react'
import PedidosContext from '../context/pedidos/useContext'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import CloseIcon from '../img/cerrar.png'
import ModalStyles from '../styles/ModalStyles'
import Caja from '../componentes/Caja'

let cantidad_ = 1

const ModalContent = ({ onPress, comida }) => {

    const pedidosContext = useContext(PedidosContext)
    const { AgregarComidaAlPedido } = pedidosContext

    const costo_unitario = parseInt(JSON.stringify(comida[0].precio))

    const [precio, setPrecio] = useState(costo_unitario)
    const [cantidad, setCantidad] = useState(1)

    const [adicionarTocineta, setAdicionarTocineta] = useState(false)
    const [adicionarHuevo, setAdicionarHuevo] = useState(false)
    const [adicionarQueso, setAdicionarQueso] = useState(false)
    const [adicionarGuacamole, setAdicionarGuacamole] = useState(false)
    const [adicionarPiña, setAdicionarPiña] = useState(false)
    const [adicionarCarneRes, setAdicionarCarneRes] = useState(false)
    const [adicionarCarnePollo, setAdicionarCarnePollo] = useState(false)

    const [quitarTomate, setQuitarTomate] = useState(false)
    const [quitarLechuga, setQuitarLechuga] = useState(false)
    const [quitarSalsas, setQuitarSalsas] = useState(false)
    const [quitarCebolla, setQuitarCebolla] = useState(false)
    const [quitarHuevo, setQuitarHuevo] = useState(false)

    const DisminuirCantidad = () => {
        cantidad_ = cantidad_ - 1
        setCantidad(cantidad > 1 ? cantidad - 1 : cantidad)
        setPrecio(precio - costo_unitario)
    }

    const AumentarCantidad = () => {
        cantidad_ = cantidad_ + 1
        setCantidad(cantidad + 1)
        const costo = precio * cantidad_
        if (cantidad_ > 1) {
            setPrecio(parseInt(precio + precio))
        } else {
            setPrecio(parseInt(costo))
        }
        console.log(costo)
    }

    const onPressAgregarTocineta = () => {
        setAdicionarTocineta(!adicionarTocineta)
        setPrecio(adicionarTocineta ? precio - (2000 * cantidad_) : precio + (2000 * cantidad_))
    }

    const onPressAgregarHuevo = () => {
        setAdicionarHuevo(!adicionarHuevo)
        setPrecio(adicionarHuevo ? precio - (2000 * cantidad_) : precio + (2000 * cantidad_))
    }

    const onPressAgregarQueso = () => {
        setAdicionarQueso(!adicionarQueso)
        setPrecio(adicionarQueso ? precio - (2000 * cantidad_) : precio + (2000 * cantidad_))
    }

    const onPressAgregarGuacamole = () => {
        setAdicionarGuacamole(!adicionarGuacamole)
        setPrecio(adicionarGuacamole ? precio - (2000 * cantidad_) : precio + (2000 * cantidad_))
    }

    const onPressAgregarPiña = () => {
        setAdicionarPiña(!adicionarPiña)
        setPrecio(adicionarPiña ? precio - (2000 * cantidad_) : precio + (2000 * cantidad_))
    }

    const onPressAgregarCarneRes = () => {
        setAdicionarCarneRes(!adicionarCarneRes)
        setPrecio(adicionarCarneRes ? precio - (2000 * cantidad_) : precio + (2000 * cantidad_))
    }

    const onPressAgregarCarnePollo = () => {
        setAdicionarCarnePollo(!adicionarCarnePollo)
        setPrecio(adicionarCarnePollo ? precio - (2000 * cantidad_) : precio + (2000 * cantidad_))
    }

    const onPressQuitarTomate = () => setQuitarTomate(!quitarTomate)
    const onPressQuitarLechuga = () => setQuitarLechuga(!quitarLechuga)
    const onPressQuitarSalsas = () => setQuitarSalsas(!quitarSalsas)
    const onPressQuitarCebolla = () => setQuitarCebolla(!quitarCebolla)
    const onPressQuitarHuevo = () => setQuitarHuevo(!quitarHuevo)

    const AgregarPedido = () => {
        let notas = ""
        if (adicionarTocineta) {
            notas = notas + "+Adic tocineta "
        }
        if (adicionarHuevo) {
            notas = notas + "+Adic huevo "
        }
        if (adicionarQueso) {
            notas = notas + "+Adic queso "
        }
        if (adicionarGuacamole) {
            notas = notas + "+Adic guacamole "
        }
        if (adicionarPiña) {
            notas = notas + "+Adic piña "
        }
        if (adicionarCarneRes) {
            notas = notas + "+Adic carne res "
        }
        if (adicionarCarnePollo) {
            notas = notas + "+Adic carne pollo "
        }
        if (quitarTomate) {
            notas = notas + "Sin tomate "
        }
        if (quitarLechuga) {
            notas = notas + "Sin lechuga "
        }
        if (quitarSalsas) {
            notas = notas + "Sin salsas "
        }
        if (quitarCebolla) {
            notas = notas + "Sin cebollas "
        }
        if (quitarHuevo) {
            notas = notas + "Sin huevo "
        }
        AgregarComidaAlPedido({
            notas: notas,
            imagen: JSON.stringify(comida[0].imagen),
            cantidad: cantidad_,
            precio: precio
        })
    }

    const onPressLimpiar = () => {
        onPress()
        cantidad_ = 1
        precioAdicional = 0
    }

    return (
        <View style={ModalStyles.container}>
            <View style={ModalStyles.modal}>
                <TouchableOpacity
                    onPress={onPressLimpiar}
                    style={ModalStyles.btnClose}
                >
                    <Image
                        source={CloseIcon}
                        style={ModalStyles.closeIcon}
                    />
                </TouchableOpacity>
                {comida.map(item => {
                    return (
                        <View key={item.id_carta}>
                            <View style={ModalStyles.viewImagenComida}>
                                <Image
                                    source={{ uri: item.imagen }}
                                    style={ModalStyles.imgComida}
                                />
                            </View>
                            <Text style={ModalStyles.textNombre}>{item.nombre}</Text>
                            <Text style={ModalStyles.textDescripcion}>{item.descripcion}</Text>

                            {item.id_categoria == 1 ?
                                <View style={ModalStyles.opciones}>
                                    <View style={ModalStyles.adiciones}>
                                        <Text style={ModalStyles.titleOpcion}>ADICIONALE: </Text>
                                        <View style={ModalStyles.viewAdicionAgregar}>
                                            <Caja
                                                state={adicionarTocineta}
                                                onPress={onPressAgregarTocineta}
                                                text="Tocineta"
                                            />
                                            <Caja
                                                state={adicionarHuevo}
                                                onPress={onPressAgregarHuevo}
                                                text="Huevo"
                                            />
                                            <Caja
                                                state={adicionarQueso}
                                                onPress={onPressAgregarQueso}
                                                text="Queso"
                                            />
                                            <Caja
                                                state={adicionarGuacamole}
                                                onPress={onPressAgregarGuacamole}
                                                text="Guacamole"
                                            />
                                            <Caja
                                                state={adicionarPiña}
                                                onPress={onPressAgregarPiña}
                                                text="Piña"
                                            />
                                            <Caja
                                                state={adicionarCarneRes}
                                                onPress={onPressAgregarCarneRes}
                                                text="Carne res"
                                            />
                                            <Caja
                                                state={adicionarCarnePollo}
                                                onPress={onPressAgregarCarnePollo}
                                                text="Carne pollo"
                                            />
                                        </View>
                                    </View>
                                    <View style={ModalStyles.quitar}>
                                        <Text style={ModalStyles.titleOpcion}>QUITALE: </Text>
                                        <View style={ModalStyles.viewAdicionQuitar}>
                                            <Caja
                                                state={quitarTomate}
                                                onPress={onPressQuitarTomate}
                                                text="Tomate"
                                            />
                                            <Caja
                                                state={quitarLechuga}
                                                onPress={onPressQuitarLechuga}
                                                text="Lechuga"
                                            />
                                            <Caja
                                                state={quitarSalsas}
                                                onPress={onPressQuitarSalsas}
                                                text="Salsas"
                                            />
                                            <Caja
                                                state={quitarCebolla}
                                                onPress={onPressQuitarCebolla}
                                                text="Cebolla"
                                            />
                                            <Caja
                                                state={quitarHuevo}
                                                onPress={onPressQuitarHuevo}
                                                text="Huevo"
                                            />
                                        </View>
                                    </View>
                                </View>
                                : null}

                            {item.id_categoria == 2 ?
                                <View style={ModalStyles.opciones}>
                                    <View style={ModalStyles.adiciones}>
                                        <Text style={ModalStyles.titleOpcion}>ADICIONALE: </Text>
                                        <View style={ModalStyles.viewAdicionAgregar}>
                                            <Caja
                                                state={adicionarTocineta}
                                                onPress={onPressAgregarTocineta}
                                                text="Tocineta"
                                            />
                                            <Caja
                                                state={adicionarHuevo}
                                                onPress={onPressAgregarHuevo}
                                                text="Huevo"
                                            />
                                            <Caja
                                                state={adicionarQueso}
                                                onPress={onPressAgregarQueso}
                                                text="Queso"
                                            />
                                            <Caja
                                                state={adicionarGuacamole}
                                                onPress={onPressAgregarGuacamole}
                                                text="Guacamole"
                                            />
                                            <Caja
                                                state={adicionarPiña}
                                                onPress={onPressAgregarPiña}
                                                text="Piña"
                                            />
                                        </View>
                                    </View>
                                    <View style={ModalStyles.quitar}>
                                        <Text style={ModalStyles.titleOpcion}>QUITALE: </Text>
                                        <View style={ModalStyles.viewAdicionQuitar}>

                                        </View>
                                    </View>
                                </View>
                                : null}

                            {item.id_categoria == 3 ?
                                <View style={ModalStyles.opciones}>
                                    <View style={ModalStyles.adiciones}>
                                        <Text style={ModalStyles.titleOpcion}>ADICIONALE: </Text>
                                        <View style={ModalStyles.viewAdicionAgregar}>
                                            <Caja
                                                state={adicionarTocineta}
                                                onPress={onPressAgregarTocineta}
                                                text="Tocineta"
                                            />
                                            <Caja
                                                state={adicionarHuevo}
                                                onPress={onPressAgregarHuevo}
                                                text="Huevo"
                                            />
                                            <Caja
                                                state={adicionarQueso}
                                                onPress={onPressAgregarQueso}
                                                text="Queso"
                                            />
                                            <Caja
                                                state={adicionarGuacamole}
                                                onPress={onPressAgregarGuacamole}
                                                text="Guacamole"
                                            />
                                            <Caja
                                                state={adicionarPiña}
                                                onPress={onPressAgregarPiña}
                                                text="Piña"
                                            />
                                        </View>
                                    </View>
                                    <View style={ModalStyles.quitar}>
                                        <Text style={ModalStyles.titleOpcion}>QUITALE: </Text>
                                        <View style={ModalStyles.viewAdicionQuitar}>

                                        </View>
                                    </View>
                                </View>
                                : null}

                            <View style={ModalStyles.viewPrecio}>
                                <Text style={ModalStyles.textPrecio}>$ {precio}</Text>
                                <TouchableOpacity
                                    style={ModalStyles.btnMenos}
                                    onPress={DisminuirCantidad}
                                >
                                    <Text style={ModalStyles.textButton}>-</Text>
                                </TouchableOpacity>
                                <View style={ModalStyles.viewCantidad}>
                                    <Text style={ModalStyles.textCantidad}>{cantidad}</Text>
                                </View>
                                <TouchableOpacity
                                    style={ModalStyles.btnMas}
                                    onPress={AumentarCantidad}
                                >
                                    <Text style={ModalStyles.textButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
                <TouchableOpacity
                    onPress={AgregarPedido}
                    style={ModalStyles.btnAgregar}
                >
                    <Text style={ModalStyles.textAgregar}>AGREGAR AL PEDIDO</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalContent

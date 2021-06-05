import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 50
    },
    closeIcon: {
        width: 30,
        height: 30
    },
    modal: {
        width: '80%',
        height: '100%',
        backgroundColor: '#333',
        alignItems: 'center',
    },
    textClose: {
        position: 'relative',
        right: 0,
        fontSize: 50
    },
    btnClose: {
        width: 90,
        height: 90,
        position: 'relative',
        left: 155,
        top: 10
    },
    viewImagenComida: {
        width: 150,
        height: 150,
        marginLeft: 45,
        marginTop: -15
    },
    imgComida: {
        width: '100%',
        height: 150,
        marginLeft: 45
    },
    textNombre: {
        fontSize: 20,
        color: '#fff',
        marginTop: 5,
        textAlign: 'center'
    },
    textDescripcion: {
        fontSize: 15,
        color: '#fff',
        marginTop: 5,
        textAlign: 'center',
    },
    textPrecio: {
        fontSize: 25,
        color: '#fff',
    },
    textCantidad: {
        fontSize: 25,
        color: '#fff'
    },
    viewPrecio: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 40,
        marginLeft: 20
    },
    viewCantidad: {
        marginLeft: 15
    },
    btnMenos: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#000',
        marginLeft: 20
    },
    btnMas: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#000',
        marginLeft: 20
    },
    textButton: {
        color: '#fff',
        fontSize: 20
    },
    opciones: {
        flexDirection: 'row',
        marginTop: 10
    },
    adiciones: {
        width: '50%',
        height: 230,
    },
    quitar: {
        width: '50%',
        height: 230,
    },
    btnAgregar: {
        width: '100%',
        height: 45,
        backgroundColor: '#ff8000',
        marginTop: 31
    },
    textAgregar: {
        textAlign: 'center',
        marginTop: 11,
        fontWeight: 'bold',
        color: '#fff'
    },
    titleOpcion: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    viewAdicionAgregar: {
        width: '100%',
        height: '100%',
        backgroundColor: '#050'
    },
    viewAdicionQuitar: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FF5936'
    },
});
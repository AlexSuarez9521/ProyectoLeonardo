import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    viewImg: {
        width: '20%',
        height: '100%',
    },
    viewDescripcion: {
        width: '75%',
        height: 150,
        marginLeft: '5%'
    },
    tituloText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    descripcionText: {
        fontSize: 12,
        marginTop: 8,
        color: '#fff'
    },
    precioText: {
        position: 'absolute',
        right: 30,
        top: 110,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    }
})
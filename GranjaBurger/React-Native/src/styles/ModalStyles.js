import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 50
    },
    modal: {
        width: '80%',
        height: '90%',
        backgroundColor: '#333',
        alignItems: 'center',
    },
    textClose: {
        position: 'relative',
        right: 100,
        fontSize: 50
    },
    btnClose: {
        width: 90,
        height: 90
    }
});
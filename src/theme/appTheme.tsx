import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: 20
    },

    calculadoraContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent:"flex-end"        
    },

    resultado: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        marginBottom: 15
    },

    resultadoPequeno: {
        fontSize: 30,
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'right'
    },

    fila: {
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 100
    },

    botonTexto: {
        textAlign: 'center',
        color : 'white',
        fontSize: 30,
        padding: 10,
        fontWeight: '300'
    }

})

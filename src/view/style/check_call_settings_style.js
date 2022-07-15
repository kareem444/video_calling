import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    infoContainer: {
        marginTop: '10%',
        alignItems: 'center',
        flex: 1,
    },

    title: {
        fontSize: 25,
        textTransform: 'capitalize',
        marginBottom: '2%',
        color: '#000',
    },

    phone: {
        fontSize: 18,
        color: '#000',
    },

    checkBoxContainer: {
        flex: 1,
    },

    buttonsContainer: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: '10%',
        flexDirection: 'row',
    }
})

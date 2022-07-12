import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    infoContainer: {
        marginTop: '10%',
        alignItems: 'center',
    },

    title: {
        fontSize: 25,
        textTransform: 'capitalize',
        marginBottom: '2%',
    },

    phone: {
        fontSize: 18,
    },

    fotterContainer: {
        height: '25%',
        backgroundColor: "#2A2A2A",
        padding: '2%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position : 'absolute',
        bottom: 0,
        width: '100%',
    },

    topIcon: {
        alignItems: 'center',
        marginBottom : 15
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    iconContainer: {
        backgroundColor: '#646464',
        borderRadius: 100,
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

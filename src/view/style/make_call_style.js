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
        color: '#000',
    },

    phone: {
        fontSize: 18,
        color: '#000',
    },

    calling: {
        fontSize: 22,
        color: '#000',
        marginTop: '10%',
    },

    fotterContainer: {
        backgroundColor: "#2A2A2A",
        padding: '2%',
        paddingTop: '5%',
        paddingBottom: '5%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    topIcon: {
        alignItems: 'center',
        marginBottom: 15
    },

    iconContainer: {
        backgroundColor: '#646464',
        borderRadius: 100,
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center',
    },

    localVideo: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    }
})

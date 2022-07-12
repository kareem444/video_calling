import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },

    infoContainer: {
        marginTop: '15%',
        alignItems: 'center',
    },

    title: {
        fontSize: 25,
        textTransform: 'capitalize',
        marginBottom: '2%',
        color: '#fff',
    },

    phone: {
        fontSize: 18,
        color: '#fff',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '25%',
    },

    answerContainer: {
        alignItems: 'center',
    },

    ansewrText: {
        fontSize: 18,
        marginTop: '5%',
        color: '#E5E5E5',
    },

    icon: {
        padding: '2%',
        borderRadius: 100,
    },
})

import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

export default function ButtonComponent({
    title,
    icon,
    isRigthIcon = false,
    onPress,
    buttonColor = '#068443',
    titleColor = '#EBEBEB',
}) {
    return (
        <Pressable
            style={{ ...styles.container, backgroundColor: buttonColor }}
            onPress={() => onPress()}>
            {!isRigthIcon && <Feather name={icon} size={30} color={titleColor} />}
            <Text style={{ ...styles.title, color: titleColor }}>{title}</Text>
            {isRigthIcon && <Feather name={icon} size={30} color={titleColor} />}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: '2%',
        margin: '2%',
        elevation: 1.5,
    },
    title: {
        fontSize: 20,
        textTransform: 'capitalize',
        margin: 5,
        fontWeight: 'bold',
    },
})

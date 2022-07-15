import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

export default function CheckBoxComponent({ title, checked, onPress, icon }) {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{
                ...styles.container,
                backgroundColor: checked ? '#0273A8' : '#EAEAEA',
            }}>
            <Text style={{ ...styles.title, color: checked ? "white" : "black" }}>{title}</Text>
            <Feather
                name={icon}
                size={25}
                color={checked ? '#E8E8E8' : "#858585"}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        padding: 12,
        borderRadius: 5,
        elevation: 2.5,
    },
    title: {
        fontSize: 20,
    },
    icon: {
        marginRight: 10,
    },
})

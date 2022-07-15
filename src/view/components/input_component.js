import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default function InputComponent({
    name,
    value,
    defaultValue,
    onChange,
    autoFocus = false,
    secureTextEntry = false,
    keyboardType = 'default',
}) {
    return (
        <View>
            <TextInput
                style={styles.input }
                value={value}
                defaultValue={defaultValue ?? ''}
                placeholder={name ?? 'input'}
                onChangeText={onChange ?? (text => console.log(text))}
                autoFocus={autoFocus}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholderTextColor='#ccc'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        color: '#000',
    },
})



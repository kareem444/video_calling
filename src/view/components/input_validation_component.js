import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'

export default function InputValidationComponent({
    control,
    errors,
    name,
    placeholder,
    required = true,
    minLength = 0,
    keyboardType = 'default'
}) {
    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: { value: required, message: 'This field is required' },
                    minLength: {
                        value: minLength,
                        message: `Password must be at least ${minLength} characters`,
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        secureTextEntry={name === 'password'}
                        blurOnSubmitt={true}
                        placeholderTextColor='#ccc'
                        
                    />
                )}
                name={name}
            />
            {errors && <Text style={styles.error}>{errors.message}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        color: '#000',
    },
    error: {
        color: 'red',
        marginStart: 10,
    },
})

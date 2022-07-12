import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import styles from '../../style/login_style'
import InputValidationComponent from '../../components/input_validation_component'

export default function Login() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = data => console.log(data)

    return (
        <View style={styles.container}>
            <InputValidationComponent
                control={control}
                errors={errors.userName}
                name='userName'
                placeholder='UserName'
            />

            <InputValidationComponent
                control={control}
                errors={errors.password}
                minLength={6}
                name='password'
                placeholder='Password'
            />

            <Button
                mode='contained'
                style={{ margin: 10 }}
                onPress={handleSubmit(onSubmit)}
            >
                Login
            </Button>
        </View>
    )
}

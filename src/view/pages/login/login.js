import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import styles from '../../style/login_style'
import InputValidationComponent from '../../components/input_validation_component'
import { useNavigation } from '@react-navigation/native'
import AuthService from '../../../service/auth_service'
import { useDispatch } from 'react-redux'

export default function Login() {
    const dispatch = useDispatch()

    const navigation = useNavigation()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()


    useEffect(() => {
        AuthService.checkConnected(navigation)
    }, [])

    const onSubmit = data =>
        AuthService.login(data.userName, data.password, navigation , dispatch)

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
                onPress={handleSubmit(onSubmit)}>
                Login
            </Button>
        </View>
    )
}

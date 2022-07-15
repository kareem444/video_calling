import React, { useEffect } from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import background from '../../../../assets/images/background.jpg'
import styles from '../../style/receive_call_style'
import CallService from '../../../service/call_service'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import PermissionsService from '../../../service/permissions_service'

export default function ReceiveCall() {
    const call_reducer = useSelector(state => state.call_reducer)

    const navigation = useNavigation()

    useEffect(() => {
        PermissionsService.cameraRequestPermission(navigation)
        return () => {
            CallService.declineCall()
        };
    }, [])

    return (
        <ImageBackground
            style={styles.container}
            source={background}
            resizeMode='cover'>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{call_reducer.callerDisplayName}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.answerContainer}>
                    <Pressable onPress={() => CallService.answerCall()}>
                        <Entypo
                            name='check'
                            size={45}
                            style={{ ...styles.icon, backgroundColor: '#0C76D5' }}
                            color='#fff'
                        />
                    </Pressable>
                    <Text style={styles.ansewrText}>Accept</Text>
                </View>
                <View style={styles.answerContainer}>
                    <Pressable onPress={() => CallService.declineCall()}>
                        <AntDesign
                            name='close'
                            size={45}
                            style={{ ...styles.icon, backgroundColor: '#BB2A03' }}
                            color='#fff'
                        />
                    </Pressable>
                    <Text style={styles.ansewrText}> Decline</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

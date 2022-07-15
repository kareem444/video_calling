import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../style/make_call_style'
import CallService from '../../service/call_service'
import { useRoute } from '@react-navigation/native'
import { MAKE_CALL_PAGE } from '../../constants/pages_strings_constants'

export default function CallButtonsComponent() {
    const dispatch = useDispatch()
    const call_reducer = useSelector(state => state.call_reducer)

    const route = useRoute()

    const isMakeCallPage = route.name === MAKE_CALL_PAGE

    return (
        <View style={styles.fotterContainer}>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() =>
                    CallService.switchCamera(dispatch, call_reducer.isFrontCamera)
                }>
                <Ionicons name='camera-reverse' size={35} color='#fff' />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.iconContainer,
                    backgroundColor: isMakeCallPage ? '#343434' : '#646464',
                }}
                onPress={() =>
                    CallService.stopCamera(dispatch, call_reducer.isCameraStopped)
                }
                disabled={isMakeCallPage}>
                <FontAwesome5
                    name={call_reducer.isCameraStopped ? 'video-slash' : 'video'}
                    size={25}
                    color={isMakeCallPage ? '#A7A7A7' : '#fff'}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.iconContainer,
                    backgroundColor: isMakeCallPage ? '#343434' : '#646464',
                }}
                onPress={() => CallService.mute(dispatch, call_reducer.isMicMuted)}
                disabled={isMakeCallPage}>
                <Ionicons
                    name={call_reducer.isMicMuted ? 'mic-off-sharp' : 'mic'}
                    size={35}
                    color={isMakeCallPage ? '#A7A7A7' : '#fff'}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ ...styles.iconContainer, backgroundColor: '#D23000' }}
                onPress={() => CallService.hangUp(dispatch)}>
                <MaterialIcons name='call-end' size={35} color='#fff' />
            </TouchableOpacity>
        </View>
    )
}

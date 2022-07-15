import React, { useEffect } from 'react'
import styles from '../../style/check_call_settings_style'
import { Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import PermissionsService from '../../../service/permissions_service'
import CheckBoxComponent from '../../components/check_box_component'
import ButtonComponent from '../../components/button_component'
import {
    HOME_PAGE,
    MAKE_CALL_PAGE,
} from '../../../constants/pages_strings_constants'
import { useSelector, useDispatch } from 'react-redux'
import { SWITCH_MUTE_MIC, SWITCH_STOP_CAMERA } from '../../../controller/types'

export default function CheckCallSettings() {
    const route = useRoute()
    const user = route.params.user

    const navigation = useNavigation()

    const call_reducer = useSelector(state => state.call_reducer)
    const dispatch = useDispatch()

    useEffect(() => {
        PermissionsService.cameraRequestPermission(navigation)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.phone}>+02 {user.phone}</Text>
            </View>
            <View style={styles.checkBoxContainer}>
                <CheckBoxComponent
                    title='Camera'
                    checked={!call_reducer.isCameraStopped}
                    onPress={() =>
                        dispatch({
                            type: SWITCH_STOP_CAMERA,
                            payload: !call_reducer.isCameraStopped,
                        })
                    }
                    icon={call_reducer.isCameraStopped ? "video-off" : 'video'}
                />
                <CheckBoxComponent
                    title='Microphone'
                    checked={!call_reducer.isMicMuted}
                    onPress={() => dispatch({
                        type: SWITCH_MUTE_MIC,
                        payload: !call_reducer.isMicMuted,
                    })}
                    icon={call_reducer.isMicMuted ? "mic-off" : 'mic'}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <ButtonComponent
                    title='Cancel'
                    icon='arrow-left'
                    buttonColor='#AE1500'
                    onPress={() => navigation.goBack()}
                />
                <ButtonComponent
                    title='Call'
                    icon='arrow-right'
                    isRigthIcon={true}
                    onPress={() =>
                        navigation.reset({
                            index: 1,
                            routes: [
                                { name: HOME_PAGE },
                                { name: MAKE_CALL_PAGE, params: { user } },
                            ],
                        })
                    }
                />
            </View>
        </View>
    )
}

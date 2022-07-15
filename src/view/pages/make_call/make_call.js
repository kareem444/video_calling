import React, { useEffect } from 'react'
import styles from '../../style/make_call_style'
import { Text, View } from 'react-native'
import CallButtonsComponent from '../../components/call_buttons_component'
import { useNavigation, useRoute } from '@react-navigation/native'
import CallService from '../../../service/call_service'
import { useDispatch, useSelector } from 'react-redux'
import PermissionsService from '../../../service/permissions_service'
import { Voximplant } from 'react-native-voximplant'

export default function MakeCall() {
    const route = useRoute()
    const user = route.params.user

    const navigation = useNavigation()

    const call_reducer = useSelector(state => state.call_reducer)
    const dispatch = useDispatch()

    useEffect(() => {
        PermissionsService.cameraRequestPermission(navigation)
        CallService.makeCall(user, navigation, dispatch)
    }, [])

    return (
        <View style={styles.container}>
            {call_reducer.localVideoStreamId != null && (
                <Voximplant.VideoView
                    videoStreamId={call_reducer.localVideoStreamId}
                    style={styles.localVideo}
                    showOnTop={true}
                    scaleType={Voximplant.RenderScaleType.SCALE_FILL}
                />
            )}
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.phone}>+02 {user.phone}</Text>
                {call_reducer.call_status != null && (
                    <Text style={styles.calling}>{call_reducer.call_status}</Text>
                )}
            </View>
            <CallButtonsComponent />
        </View>
    )
}

import React, { useEffect } from 'react'
import { View } from 'react-native'
import styles from '../../style/make_call_style'
import mainStyles from '../../style/calling_style'
import CallButtonsComponent from '../../components/call_buttons_component'
import { Voximplant } from 'react-native-voximplant'
import { useSelector, useDispatch } from 'react-redux'
import CallService from '../../../service/call_service'

export default function Calling() {
    const call_reducer = useSelector(state => state.call_reducer)

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            CallService.hangUp(dispatch)
        }
    }, [])

    return (
        <View style={styles.container}>
            <Voximplant.VideoView
                videoStreamId={call_reducer.localVideoStreamId}
                showOnTop={true}
                style={mainStyles.otherPersonCamera}
            />
            <Voximplant.VideoView
                videoStreamId={call_reducer.remoteVideoStreamId}
                scaleType={Voximplant.RenderScaleType.SCALE_FILL}
                style={{ height: '100%', width: '100%' }}
            />
            <CallButtonsComponent />
        </View>
    )
}

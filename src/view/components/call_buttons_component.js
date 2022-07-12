import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import CallingService from '../../service/calling_service'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../style/make_call_style'

export default function CallButtonsComponent() {
    const dispatch = useDispatch()
    const calling_reducer = useSelector(state => state.calling_reducer)

    return (
        <View style={styles.fotterContainer}>
            <View style={styles.topIcon}>
                <SimpleLineIcons name='arrow-up' size={35} color='#B8B8B8' />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => CallingService.switchCamera(dispatch)}
                >
                    <Ionicons name='camera-reverse' size={35} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => CallingService.stopCamera(dispatch)}
                >
                    <FontAwesome5
                        name={calling_reducer.stopCamera ? 'video' : 'video-slash'}
                        size={25}
                        color='#fff'
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => CallingService.mute(dispatch)}
                >
                    <Ionicons
                        name={calling_reducer.mute ? 'mic' : 'mic-off-sharp'}
                        size={35}
                        color='#fff'
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.iconContainer, backgroundColor: '#D23000' }}
                    onPress={() => CallingService.endCall(dispatch)}
                >
                    <MaterialIcons name='call-end' size={35} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    )
}
import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import styles from '../../style/make_call_style'
import mainStyles from '../../style/calling_style'
import Draggable from 'react-native-draggable'
import CallButtonsComponent from '../../components/call_buttons_component'

export default function Calling() {
    const windowWidth = useWindowDimensions().width

    return (
        <View style={styles.container}>
            <Draggable
                x={windowWidth - 120}
                y={0}
                renderSize={500}
                shouldReverse={true}
            >
                <View style={mainStyles.otherPersonCamera}></View>
            </Draggable>
            <CallButtonsComponent />
        </View>
    )
}

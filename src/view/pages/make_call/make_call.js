import React from 'react'
import styles from '../../style/make_call_style'
import {Text, View } from 'react-native'
import CallButtonsComponent from '../../components/call_buttons_component'
import { useRoute } from '@react-navigation/native';

export default function MakeCall() {
    const route = useRoute();
    const user = route.params.user;
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.phone}>+02 {user.phone}</Text>
            </View>
            <CallButtonsComponent />
        </View>
    )
}

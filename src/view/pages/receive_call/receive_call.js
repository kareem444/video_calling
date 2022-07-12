import React from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import background from '../../../../assets/images/background.jpg'
import styles from '../../style/receive_call_style'

export default function ReceiveCall() {
    return (
        <ImageBackground
            style={styles.container}
            source={background}
            resizeMode='cover'
        >
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Kareem Ayman</Text>
                <Text style={styles.phone}>+02 01022564374</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.answerContainer}>
                    <Pressable>
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
                    <Pressable>
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


import { PermissionsAndroid } from 'react-native'

export default class PermissionsService {
    static async cameraRequestPermission(navigation) {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ])

            const cameraPermission =
                granted[PermissionsAndroid.PERMISSIONS.CAMERA] ===
                PermissionsAndroid.RESULTS.GRANTED
            const recordAudioPermission =
                granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] ===
                PermissionsAndroid.RESULTS.GRANTED

            if (!cameraPermission || !recordAudioPermission) {
                navigation.goBack()
            }
        } catch (err) {
            console.warn(err)
        }
    }
}
import { Voximplant } from 'react-native-voximplant'
import { APP_NAME, ACCOUNT_NAME } from '../constants/strings_constants'
import Snackbar from 'react-native-snackbar'
import { HOME_PAGE } from '../constants/pages_strings_constants'
import { HANDEL_AUTH } from '../controller/types'

export default class AuthService {
    static async checkConnected(navigation) {
        const client = Voximplant.getInstance()
        let state = await client.getClientState()
        if (state === Voximplant.ClientState.DISCONNECTED) {
            await client.connect()
        } else if (state === Voximplant.ClientState.LOGGED_IN) {
            navigation.reset({ index: 0, routes: [{ name: HOME_PAGE }] })
        }
    }

    static async login(userName, password, navigation, dispatch) {
        const client = Voximplant.getInstance()
        try {
            let authResult = await client.login(
                `${userName}@${APP_NAME}.${ACCOUNT_NAME}.voximplant.com`,
                password,
            )
            dispatch({ type: HANDEL_AUTH, payload: authResult })
            Snackbar.show({
                text: "Login successful",
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#4CAF50',
            })
            navigation.reset({ index: 0, routes: [{ name: HOME_PAGE }] })
        } catch (e) {
            Snackbar.show({
                text: "Error code : " + e.code,
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#ff0000',
            })
            console.log(e.name + ' ' + e.message)
        }
    }
}

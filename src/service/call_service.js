import Snackbar from 'react-native-snackbar'
import { Voximplant } from 'react-native-voximplant'
import {
    CALLING_PAGE,
    HOME_PAGE,
    RECEIVE_CALL_PAGE,
} from '../constants/pages_strings_constants'
import {
    CALL_STATUS,
    HANDEL_LOCAL_VIDEO_STREAM_ID,
    HANDEL_REMOTE_VIDEO_STREAM_ID,
    SET_CALLER_DISPLAY_NAME,
    END_CALL,
    SWITCH_MUTE_MIC,
    SWITCH_STOP_CAMERA,
    SWITCH_CAMERA,
} from '../controller/types'

export default class CallService {
    static #set_call
    static #end_point

    // *********************************************************
    // make call methods
    // *********************************************************

    static async makeCall(user, navigation, dispatch) {
        const client = Voximplant.getInstance()
        const callSettings = {
            video: {
                receiveVideo: true,
                sendVideo: true,
            },
        }
        this.#set_call = await client.call(user.userName, callSettings)
        this.listenToCallEvents(navigation, dispatch)
    }

    static async hangUp(dispatch) {
        this.#set_call.hangup()
        dispatch({ type: END_CALL })
        console.log('endCall')
    }

    // *********************************************************
    // answer call methods
    // *********************************************************

    static async answerCall() {
        const callSettings = {
            video: {
                receiveVideo: true,
                sendVideo: true,
            },
        }
        await this.#set_call.answer(callSettings)
    }

    static async declineCall() {
        this.#set_call.decline()
    }

    // *********************************************************
    // handel call events
    // *********************************************************

    static async listenToCallEvents(navigation, dispatch) {
        this.#set_call.on(Voximplant.CallEvents.Failed, e => {
            console.log(e.reason)
            navigation.reset({ index: 0, routes: [{ name: HOME_PAGE }] })
            Snackbar.show({
                text: 'Call failed',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#f44336',
            })
        })
        this.#set_call.on(Voximplant.CallEvents.ProgressToneStart, e => {
            dispatch({ type: CALL_STATUS, payload: 'Calling...' })
            console.log('watting ')
        })
        this.#set_call.on(Voximplant.CallEvents.Connected, e => {
            dispatch({ type: CALL_STATUS, payload: 'Connected' })
            console.log('connected')
            navigation.reset({
                index: 1,
                routes: [{ name: HOME_PAGE }, { name: CALLING_PAGE }],
            })
        })
        this.#set_call.on(Voximplant.CallEvents.Disconnected, e => {
            console.log('disconnected')
            navigation.reset({ index: 0, routes: [{ name: HOME_PAGE }] })
            Snackbar.show({
                text: 'Call Disconnected',
                duration: Snackbar.LENGTH_SHORT,
            })
            this.switchCamera(dispatch, false)
        })
        this.#set_call.on(Voximplant.CallEvents.LocalVideoStreamAdded, e => {
            console.log('local video stream added', e.videoStream.id)
            dispatch({ type: HANDEL_LOCAL_VIDEO_STREAM_ID, payload: e.videoStream.id })
        })
        this.#set_call.on(Voximplant.CallEvents.LocalVideoStreamRemoved, e => {
            console.log('local video stream removed')
            dispatch({ type: HANDEL_LOCAL_VIDEO_STREAM_ID, payload: null })
        })
        this.#set_call.on(Voximplant.CallEvents.EndpointAdded, e => {
            console.log('endpoint added')
            this.#end_point = e.endpoint
            this.listenToEndpointEvents(dispatch)
        })
    }

    static async stopListingToCallEvents(dispatch) {
        if (this.#set_call != null) {
            this.#set_call.off(Voximplant.CallEvents.Failed)
            this.#set_call.off(Voximplant.CallEvents.ProgressToneStart)
            this.#set_call.off(Voximplant.CallEvents.Connected)
            this.#set_call.off(Voximplant.CallEvents.Disconnected)
            this.#set_call.off(Voximplant.CallEvents.LocalVideoStreamAdded)
            this.#set_call.off(Voximplant.CallEvents.LocalVideoStreamRemoved)
            this.#set_call.off(Voximplant.CallEvents.EndpointAdded)

            dispatch({ type: CALL_STATUS, payload: null })
        }

        // endpoints stop listening events

        if (this.#end_point != null) {
            this.#end_point.off(Voximplant.EndpointEvents.RemoteVideoStreamAdded)
            this.#end_point.off(Voximplant.EndpointEvents.RemoteVideoStreamRemoved)
        }
    }

    // *********************************************************
    // handel incoming call event
    // *********************************************************

    static async listenToIncomingCall(navigation, dispatch) {
        const client = Voximplant.getInstance()
        client.on(Voximplant.ClientEvents.IncomingCall, e => {
            console.log('incoming call')
            this.#set_call = e.call
            dispatch({
                type: SET_CALLER_DISPLAY_NAME,
                payload: this.#set_call.getEndpoints()[0].displayName,
            })
            this.listenToCallEvents(navigation, dispatch)
            navigation.navigate(RECEIVE_CALL_PAGE)
        })
    }

    static async stopListeningToIncomingCall() {
        const client = Voximplant.getInstance()
        client.off(Voximplant.ClientEvents.IncomingCall)
    }

    // *********************************************************
    // handel endpoint event (the endpoint is user who you are calling).
    // *********************************************************

    static async listenToEndpointEvents(dispatch) {
        this.#end_point.on(Voximplant.EndpointEvents.RemoteVideoStreamAdded, e => {
            console.log('remote video stream added', e.videoStream.id)
            dispatch({ type: HANDEL_REMOTE_VIDEO_STREAM_ID, payload: e.videoStream.id })
        })
        this.#end_point.on(
            Voximplant.EndpointEvents.RemoteVideoStreamRemoved,
            e => {
                console.log('remote video stream removed')
                dispatch({ type: HANDEL_REMOTE_VIDEO_STREAM_ID, payload: null })
            },
        )
    }

    // *********************************************************
    // handel call controllers.
    // *********************************************************

    static async switchCamera(dispatch, isFrontCamera) {
        let camera = await Voximplant.Hardware.CameraManager.getInstance();
        dispatch({ type: SWITCH_CAMERA, payload: !isFrontCamera })
        camera.switchCamera(isFrontCamera ? Voximplant.CameraType.BACK : Voximplant.CameraType.FRONT);
        console.log('switch camera');
    }

    static async stopCamera(dispatch, stopCamera) {
        dispatch({ type: SWITCH_STOP_CAMERA, payload: !stopCamera })
        console.log('stopCamera')
        this.#set_call.sendVideo(stopCamera);
    }

    static async mute(dispatch, isMuted) {
        dispatch({ type: SWITCH_MUTE_MIC, payload: !isMuted })
        console.log('mute', isMuted)
        this.#set_call.sendAudio(isMuted);
    }
}

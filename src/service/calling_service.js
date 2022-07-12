import { END_CALL, SWITCH_MUTE, SWITCH_STOP_CAMERA } from "../controller/types";

export default class CallingService {
    static async switchCamera(dispatch) {
        console.log('switchCamera');
    }

    static async stopCamera(dispatch) {
        dispatch({ type: SWITCH_STOP_CAMERA });
        console.log('stopCamera');
    }

    static async mute(dispatch) {
        dispatch({ type: SWITCH_MUTE });
        console.log('mute');
    }

    static async endCall(dispatch) {
        dispatch({ type: END_CALL });
        console.log('endCall');
    }
}

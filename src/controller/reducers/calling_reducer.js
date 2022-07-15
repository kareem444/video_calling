import {
    CALL_STATUS,
    END_CALL,
    HANDEL_LOCAL_VIDEO_STREAM_ID,
    HANDEL_REMOTE_VIDEO_STREAM_ID,
    SET_CALLER_DISPLAY_NAME,
    SWITCH_CAMERA,
    SWITCH_MUTE_MIC,
    SWITCH_STOP_CAMERA,
} from '../types'

const INITIAL_STATE = {
    isFrontCamera: false,
    isMicMuted: false,
    isCameraStopped: false,
    call_status: null,
    callerDisplayName: null,
    localVideoStreamId: null,
    remoteVideoStreamId: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SWITCH_CAMERA:
            return { ...state, isFrontCamera: action.payload }
        case SWITCH_STOP_CAMERA:
            return { ...state, isCameraStopped: action.payload }
        case SWITCH_MUTE_MIC:
            return { ...state, isMicMuted: action.payload }
        case CALL_STATUS:
            return { ...state, call_status: action.payload }
        case SET_CALLER_DISPLAY_NAME:
            return { ...state, callerDisplayName: action.payload }
        case HANDEL_LOCAL_VIDEO_STREAM_ID:
            return { ...state, localVideoStreamId: action.payload }
        case HANDEL_REMOTE_VIDEO_STREAM_ID:
            return { ...state, remoteVideoStreamId: action.payload }
        case END_CALL:
            return {
                ...state,
                isFrontCamera: false,
                isMicMuted: false,
                isCameraStopped: false,
                call_status: null,
                callerDisplayName: null,
                localVideoStreamId: null,
                remoteVideoStreamId: null,
            }
        default:
            return state
    }
}

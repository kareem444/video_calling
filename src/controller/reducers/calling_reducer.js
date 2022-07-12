import { END_CALL, SWITCH_MUTE, SWITCH_STOP_CAMERA } from '../types'

const INITIAL_STATE = {
    mute: false,
    stopCamera: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SWITCH_STOP_CAMERA:
            return { ...state, stopCamera: !state.stopCamera }
        case SWITCH_MUTE:
            return { ...state, mute: !state.mute }
        case END_CALL:
            return { ...state, mute: false , stopCamera: false }
        default:
            return state
    }
}

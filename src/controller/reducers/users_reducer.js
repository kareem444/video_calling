import { users_info } from "../../../assets/users_info";
import { HANDEL_AUTH, SEARCH_FOR_USER } from "../types";

const INITIAL_STATE = { users: users_info, auth: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_FOR_USER:
            return { ...state, users: action.payload };
        case HANDEL_AUTH:
            return { ...state, auth: action.payload };
        default:
            return state
    }
}
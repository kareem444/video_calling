import { users_info } from "../../../assets/users_info";
import { SEARCH_FOR_USER } from "../types";

const INITIAL_STATE = { users: users_info };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_FOR_USER:
            return { ...state  , users: action.payload };
        default:
            return state
    }
}
import { users_info } from '../../../assets/users_info'
import { SEARCH_FOR_USER } from '../types'

export const SearchUserAction = (action) => {
    return async dispatch => {
        try {
            let findUsers = users_info.filter((user) => {
                if (user.name.toLowerCase().includes(action.payload.toLowerCase())) {
                    return user;
                }
            })
            dispatch({ type: SEARCH_FOR_USER, payload: findUsers });
        } catch (e) {
            console.log(e)
        }
    }
}

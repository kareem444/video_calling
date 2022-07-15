import {
    configureStore
} from '@reduxjs/toolkit';

import user_reducer from './reducers/users_reducer';
import call_reducer from './reducers/calling_reducer';

export default configureStore({
    reducer: {
        user_reducer,
        call_reducer
    },
});
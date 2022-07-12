import {
    configureStore
} from '@reduxjs/toolkit';

import users_reducer from './reducers/users_reducer';
import calling_reducer from './reducers/calling_reducer';

export default configureStore({
    reducer: {
        users_reducer,
        calling_reducer
    },
});
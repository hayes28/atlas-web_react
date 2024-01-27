// uiReducer.js
import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

// Define the Initial State
// task 1 - convert the initial state to an immutable Map
const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
});

// Define the Reducer
// task 1 - convert the reducer to use immutable Map
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case actionTypes.HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case actionTypes.LOGIN_SUCCESS:
            return state
                .set('isUserLoggedIn', true)
                .set('user', Map(action.payload));
        case actionTypes.LOGIN_FAILURE:
            return state
                .set('isUserLoggedIn', false)
                .set('user', Map({}));
        case actionTypes.LOGOUT:
            return state
                .set('isUserLoggedIn', false)
                .set('user', Map({}));
        default:
            return state;
    }
};

// Export the Reducer
export default uiReducer;

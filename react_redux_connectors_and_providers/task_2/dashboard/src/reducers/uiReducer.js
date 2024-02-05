// uiReducer.js
import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

// Define the Initial State
// task 1 - convert the initial state to an immutable Map
const initialState = new Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: new Map({}),
});

// Define the Reducer
// Using immutable Map in the reducer
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case actionTypes.HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case actionTypes.LOGIN_SUCCESS:
            // Ensure payload.user is converted to Map if it's not already
            // Assuming payload is a plain object that contains user data
            const userMap = new Map(action.payload);
            return state
                .set('isUserLoggedIn', true)
                .set('user', userMap);
        case actionTypes.LOGIN_FAILURE:
            // No need to change user info on login failure unless specific error info is required
            return state.set('isUserLoggedIn', false);
        case actionTypes.LOGOUT:
            // Reset user to initial empty Map on logout
            return state
                .set('isUserLoggedIn', false)
                .set('user', new Map({}));
        default:
            return state;
    }
};

// Export the Reducer
export default uiReducer;

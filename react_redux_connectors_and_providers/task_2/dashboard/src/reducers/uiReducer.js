// uiReducer.js
import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

// Define the Initial State
const initialState = new Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null, // Initialize user as null instead of an empty Map
});

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case actionTypes.HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case actionTypes.LOGIN:
            // Set the user with the payload when LOGIN action is dispatched
            return state
                .set('isUserLoggedIn', true)
                .set('user', action.payload); // Assuming the payload contains the user object
        case actionTypes.LOGOUT:
            // Reset the user to null when LOGOUT action is dispatched
            return state
                .set('isUserLoggedIn', false)
                .set('user', null);
        // Handle other actions like LOGIN_SUCCESS, LOGIN_FAILURE as needed
        default:
            return state;
    }
};

export default uiReducer;

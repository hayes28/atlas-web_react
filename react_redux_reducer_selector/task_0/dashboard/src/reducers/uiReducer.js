// uiReducer.js
import * as actionTypes from '../actions/uiActionTypes';

// Define the Initial State
const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

// Define the Reducer
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
            return {
                // Spread the state to avoid mutation
                ...state,
                isNotificationDrawerVisible: true,
            };
        case actionTypes.HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isUserLoggedIn: false,
            };
        case 'LOGOUT':
            return {
                ...state,
                isUserLoggedIn: false,
                user: {},
            };
        default:
            return state;
    }
}

// Export the Reducer
export default uiReducer;

// uiActionCreators.js
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

// Action creators
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE,
});

export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
});

export const logout = () => ({
    type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

// Async action creator for handling login
export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch(login(email, password));  // Dispatching the login action
        try {
            const response = await fetch('/login-success.json'); // Simulating an API call
            if (response.ok) {
                dispatch(loginSuccess()); // Dispatching login success action
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            dispatch(loginFailure()); // Dispatching login failure action
        }
    };
};

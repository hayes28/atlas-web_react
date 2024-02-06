// uiActionCreators.js
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

// Action creators
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user // Assuming 'user' is a serializable object with user details
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: { error } // Passing error information
});

export const login = (email, password) => ({
    type: LOGIN,
    payload: { email, password } // Storing the credentials in a 'payload' property
});

export const logout = () => {
    // console.log('logout action creator called');
    return {
        type: LOGOUT,
    };
}

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

// Async action creator for handling login
export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch(login(email, password)); // Dispatching the login action
        try {
            // Simulating an API call
            const response = await fetch('/login-success.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const user = await response.json(); // Get the user data from the response
                dispatch(loginSuccess(user)); // Dispatching login success action with the user data
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            dispatch(loginFailure(error.toString())); // Dispatching login failure action with the error message
        }
    };
};

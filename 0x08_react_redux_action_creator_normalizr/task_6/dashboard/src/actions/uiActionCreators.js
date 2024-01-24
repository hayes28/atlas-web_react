// uiActionCreators.js
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { useDispatch } from 'react-redux';

// Action creator for login
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

// Wrap the action creators with the dispatch function, to bound them together
export const boundLogin = (email, password) => useDispatch(login(email, password));
export const boundLogout = () => useDispatch(logout());
export const boundDisplayNotificationDrawer = () => useDispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => useDispatch(hideNotificationDrawer());

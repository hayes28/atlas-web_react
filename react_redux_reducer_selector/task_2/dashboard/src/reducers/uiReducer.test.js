import uiReducer from "./uiReducer";
import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

// Define the initial state based on your reducer's initial state
const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
});

describe('uiReducer', () => {
    test('should return the initial state when no action is passed', () => {
        const newState = uiReducer(undefined, {});
        expect(newState.toJS()).toEqual(initialState.toJS());
    });

    test('should return the initial state when SELECT_COURSE action is passed', () => {
        const newState = uiReducer(initialState, { type: 'SELECT_COURSE' });
        expect(newState.toJS()).toEqual(initialState.toJS());
    });

    test('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const newState = uiReducer(initialState, { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER });
        expect(newState.get('isNotificationDrawerVisible')).toBe(true);
    });
    // Task 1
    test('should set isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
        // Setup state with the drawer visible
        const state = initialState.set('isNotificationDrawerVisible', true);
        const newState = uiReducer(state, { type: actionTypes.HIDE_NOTIFICATION_DRAWER });
        expect(newState.get('isNotificationDrawerVisible')).toBe(false);
    });

    test('should log the user in and set user data on LOGIN_SUCCESS', () => {
        const userPayload = { name: 'John Doe', email: 'john@example.com' };
        const newState = uiReducer(initialState, { type: actionTypes.LOGIN_SUCCESS, payload: userPayload });
        expect(newState.get('isUserLoggedIn')).toBe(true);
        expect(newState.get('user').toJS()).toEqual(userPayload);
    });

    test('should log the user out on LOGOUT', () => {
        // Setup state with user logged in
        const loggedInState = initialState.set('isUserLoggedIn', true).set('user', Map({ name: 'John Doe' }));
        const newState = uiReducer(loggedInState, { type: actionTypes.LOGOUT });
        expect(newState.get('isUserLoggedIn')).toBe(false);
        expect(newState.get('user').toJS()).toEqual({});
    });
});

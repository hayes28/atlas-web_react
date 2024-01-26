import uiReducer from "./uiReducer";
import * as actionTypes from '../actions/uiActionTypes';

// Define the initial state based on your reducer's initial state
const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

describe('uiReducer', () => {
    test('should return the initial state when no action is passed', () => {
        const newState = uiReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    test('should return the initial state when SELECT_COURSE action is passed', () => {
        const newState = uiReducer(initialState, { type: 'SELECT_COURSE' });
        expect(newState).toEqual(initialState);
    });

    test('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const newState = uiReducer(initialState, { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER });
        expect(newState.isNotificationDrawerVisible).toBe(true);
    });
});


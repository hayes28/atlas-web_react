// uiActionCreators.test.js
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('uiActionCreators', () => {
    it('login returns the correct action type and user', () => {
        const email = '';
        const password = '';
        const expectedAction = {
            type: LOGIN,
            user: { email, password }
        };
        expect(login(email, password)).toEqual(expectedAction);
    });

    it('logout returns the correct action type', () => {
        const expectedAction = {
            type: LOGOUT,
        };
        expect(logout()).toEqual(expectedAction);
    });

    it('displayNotificationDrawer returns the correct action type', () => {
        const expectedAction = {
            type: DISPLAY_NOTIFICATION_DRAWER,
        };
        expect(displayNotificationDrawer()).toEqual(expectedAction);
    });

    it('hideNotificationDrawer returns the correct action type', () => {
        const expectedAction = {
            type: HIDE_NOTIFICATION_DRAWER,
        };
        expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
});

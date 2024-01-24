// uiActionCreators.test.js
import { login, logout, loginRequest, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import { thunk } from "redux-thunk"

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const fetch = require('node-fetch');

describe('async actions', () => {
    afterEach(() => {
        fetchMock.resetMocks();
    });

    it('creates LOGIN_SUCCESS when login is successful', () => {
        fetch.mockResponseOnce(JSON.stringify({}));

        const expectedActions = [
            { type: LOGIN, user: { email: '', password: '' } },
            { type: LOGIN_SUCCESS }
        ];

        const store = mockStore({});
        return store.dispatch(loginRequest('', ''))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('creates LOGIN_FAILURE when login fails', () => {
        fetchMock.mockRejectOnce(new Error('fake error message'));

        const expectedActions = [
            { type: LOGIN, user: { email: 'wrongemail@example.com', password: 'wrongpassword' } },
            { type: LOGIN_FAILURE }
        ];

        const store = mockStore({});

        return store.dispatch(loginRequest('wrongemail@example.com', 'wrongpassword'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});

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

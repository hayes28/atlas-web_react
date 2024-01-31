import React from 'react';
import { shallow, mount } from 'enzyme';
import { App, mapStateToProps } from './App';
import AppContext from './AppContext';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

StyleSheetTestUtils.suppressStyleInjection();

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    document.querySelector = jest.fn().mockImplementation(() => ({
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    }));
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    document.querySelector.mockRestore();
});

// Set up a mock store with the necessary middleware
const mockStore = configureStore([]);
let store = mockStore({
    uiReducer: {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,

    }});


beforeEach(() => {
    store = mockStore({ uiReducer: { isNotificationDrawerVisible: false, isUserLoggedIn: false } });
});

beforeEach(() => {
    jest.clearAllMocks();
});

// test suite for App component
describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    it('should render the connected component', () => {
        expect(wrapper.find(App).length).toEqual(1);
    });

    it('renders without crashing', () => {
        // This test is now redundant since `beforeEach` is doing the same thing,
        // but I'm leaving it here for demonstration purposes
        expect(wrapper.exists()).toBe(true);
    });

    it("contains the Notifications component", () => {
        expect(wrapper.containsMatchingElement(<Notifications />)).toEqual(false);
    });

    it("contains the Header component", () => {
        expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
    });

    it("contains the Login component when not logged in", () => {
        expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
    });

    it("contains the Footer component", () => {
        expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
    });

    it('does not display CourseList when isLoggedIn is false', () => {
        expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(false);
    });

    // test suite for logIn
    describe('when not logged in', () => {

        it('does not display CourseList', () => {
            const wrapper = mount(
                <Provider store={store}>
                    <App />
                </Provider>
            );
            store.getState({ type: { isLoggedIn: false } });
            wrapper.update();
            expect(wrapper.find(CourseList).exists()).toBe(false);
        });

    });

    // test suite for logIn
    describe('when logged in', () => {

        it('displays CourseList', () => {
            const wrapper = mount(
                <Provider store={store}>
                    <App />
                </Provider>
            );
            // Simulate the logIn action
            store.dispatch({ type: 'LOGIN', payload: { email: 'user@test.com', password: 'password' } });
            wrapper.update();
            // Find CourseList and check if it exists
            expect(wrapper.find(CourseList).exists()).toBe(true);
        });

        // test suite for handleDisplayDrawer
        describe('displayDrawer', () => {

            it('defaults to false', () => {
                const wrapper = mount(
                    <Provider store={store}>
                        <App />
                    </Provider>
                );
                wrapper.store.dispatch({ type: { isLoggedIn: true } });
                wrapper.update();
                expect(store.getState().uiReducer.isNotificationDrawerVisible).toBe(false);
            });

            it('can be set to true', () => {
                const wrapper = mount(
                    <Provider store={store}>
                        <App />
                    </Provider>
                );
                wrapper.store.dispatch().handleDisplayDrawer();
                wrapper.update();
                expect(store.getState().uiReducer.isNotificationDrawerVisible).toBe(true);
            });

            test('logOut function is called on Ctrl+h press', async () => {
                window.alert = jest.fn();

                const wrapper = mount(
                    <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
                        <App />
                    </AppContext.Provider>
                );

                const actions = store.getActions();
                expect(actions).toEqual([{ type: 'LOGOUT' }]);

                // You need to re-render the component for the spy to take effect
                wrapper.update();

                await act(async () => {
                    // Simulate the key press
                    document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'h', 'ctrlKey': true }));
                });

                expect(logOutSpy).toHaveBeenCalled();
                expect(window.alert).toHaveBeenCalledWith('Logging you out');

                window.alert.mockRestore();
            });

            it('checks that the default state of displayDrawer is false', () => {
                const wrapper = shallow(
                    <Provider store={store}>
                        <App />
                    </Provider>
                ).dive();
                expect(wrapper.state().displayDrawer).toBe(false);
            });

            it('checks that handleDisplayDrawer sets state of displayDrawer to true', () => {
                // Use dive() to access the App instance when using shallow
                const wrapper = shallow(
                    <Provider store={store}>
                        <App />
                    </Provider>
                ).dive();
                wrapper.store.dispatch().handleDisplayDrawer();
                expect(wrapper.state().displayDrawer).toBe(true);
            });
        });

            it('checks that handleHideDrawer sets state of displayDrawer back to false', () => {
                const wrapper = shallow(
                    <Provider store={store}>
                        <App />
                    </Provider>
                ).dive();
                wrapper.store.dispatch().handleDisplayDrawer();
                wrapper.store.dispatch().handleHideDrawer();
                expect(wrapper.state().displayDrawer).toBe(false);
            });
        });
        it('logIn function updates the state correctly', () => {
            const email = 'user@test.com';
            const password = 'password';
            wrapper.store.dispatch().logIn(email, password);
            const userState = wrapper.state('user');
            expect(userState.isLoggedIn).toBe(true);
            expect(userState.email).toEqual(email);
        });

        it('logOut function updates the state correctly', () => {
            // First log the user in
            wrapper.store.dispatch().logIn('user@test.com', 'password');
            // Then log out
            wrapper.store.dispatch().logOut();
            const userState = wrapper.state('user');
            expect(userState.isLoggedIn).toBe(false);
            expect(userState.email).toEqual('');
        });

        it('markNotificationAsRead removes the notification from the list', () => {
            // Initial notification length
            const initialNotificationLength = wrapper.state('listNotifications').length;

            // Assume the ID of the notification to be removed is 2
            wrapper.store.dispatch().markNotificationAsRead(2);

            // After marking as read, the length should be one less
            expect(wrapper.state('listNotifications').length).toBe(initialNotificationLength - 1);

            // The notification with ID 2 should not be found in the list
            expect(wrapper.state('listNotifications').some(n => n.id === 2)).toBe(false);
        });
    });

    // test suite for mapStateToProps
    describe('mapStateToProps', () => {
        it('should return the right object when isUserLoggedIn is true', () => {
            const state = fromJS({
                uiReducer: {
                    isUserLoggedIn: true
                }
            });

            const expectedProps = {
                isLoggedIn: true
            };

            expect(mapStateToProps(state.toJS())).toEqual(expectedProps);
        });
    });

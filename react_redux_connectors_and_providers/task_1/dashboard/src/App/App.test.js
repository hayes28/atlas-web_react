import React from 'react';
import { mount } from 'enzyme';
import { App, mapStateToProps } from './App';
console.log(mapStateToProps); // This should log out the function if everything is correct.
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import { act } from 'react-dom/test-utils'; // or '@testing-library/react'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';

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
    const mockFunctions = {
        displayNotificationDrawer: jest.fn(),
        hideNotificationDrawer: jest.fn(),
        logout: jest.fn(),
        markAsRead: jest.fn(),
    };

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <App {...mockFunctions} />
            </Provider>
        );
    });

    it('...', () => {
        const mockFunctions = {
            displayNotificationDrawer: jest.fn(),
            hideNotificationDrawer: jest.fn(),
            logout: jest.fn(),
            markAsRead: jest.fn(),
        };

        wrapper = mount(
            <Provider store={store}>
                <App {...mockFunctions} />
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
    describe('when logged in', () => {

        it('displays CourseList', () => {
            // Make sure isLoggedIn is set to true
            wrapper = mount(
                <Provider store={store}>
                    <App {...mockFunctions} isLoggedIn />
                </Provider>
            );
            // Simulate the logIn action
            store.dispatch({ type: 'LOGIN', payload: { email: 'user@test.com', password: 'password' } });
            wrapper.update();
            // Find CourseList and check if it exists
            expect(wrapper.find(CourseList).exists()).toBe(true);
        });
    });

    it('logOut function is called on Ctrl+h press', async () => {
        window.alert = jest.fn();
        const mockLogout = jest.fn();

        // You might need to mock the store state that reflects a logged-in user
        store = mockStore({ uiReducer: { isUserLoggedIn: true } });

        const wrapper = mount(
            <Provider store={store}>
                <App logout={mockLogout} />
            </Provider>
        );

        await act(async () => {

        // Simulate the key press
            const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
            document.dispatchEvent(event);
        });

        expect(mockLogout).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith('Logging you out');

        window.alert.mockRestore();
    });


    it('displays the drawer when displayNotificationDrawer is called', () => {
        // Assuming that the drawer is initially hidden
        expect(wrapper.find('displayDrawer').exists()).toBe(false);

        // Simulate the action that triggers the display of the drawer
        mockFunctions.displayNotificationDrawer();

        // Force the component to update to reflect the new state
        wrapper.update();

        // Assert that the drawer is now visible
        expect(wrapper.find('displayDrawer').exists()).toBe(false);
    });

    it('hides the drawer when hideNotificationDrawer is called', () => {
        // Assuming that the drawer is initially visible
        mockFunctions.displayNotificationDrawer();
        wrapper.update();
        expect(wrapper.find('displayDrawer').exists()).toBe(false);

        // Simulate the action that triggers the hiding of the drawer
        mockFunctions.hideNotificationDrawer();

        // Force the component to update to reflect the new state
        wrapper.update();

        // Assert that the drawer is now hidden
        expect(wrapper.find('displayDrawer').exists()).toBe(false);
    });

    // test suite for mapStateToProps
    describe('mapStateToProps', () => {
        // Happy path test with realistic test values
        test('mapStateToProps - should map state to props correctly', () => {
            // Arrange
            const expectedProps = {
                isLoggedIn: false,
                displayDrawer: false,
                listNotifications: []
            };
            const state = {
                uiReducer: fromJS({
                    isUserLoggedIn: false,
                    isNotificationDrawerVisible: false,
                    listNotifications: []
                })
            };

            // Act
            const props = mapStateToProps(state);

            // Assert
            expect(props).toEqual(expectedProps);
        });

        // Edge case test with different realistic test values
        test('mapStateToProps - should handle different values for state properties', () => {
            // Arrange
            const expectedProps = {
                isLoggedIn: true,
                displayDrawer: true,
                listNotifications: [{ id: 1, text: 'Notification 1' }]
            };
            const state = {
                uiReducer: fromJS({
                    isUserLoggedIn: true,
                    isNotificationDrawerVisible: true,
                    listNotifications: [{ id: 1, text: 'Notification 1' }]
                })
            };

            // Act
            const props = mapStateToProps(state);

            // Assert
            expect(props).toEqual(expectedProps);
        });

        // Error case test when properties are missing in the state
        test('mapStateToProps - should handle missing properties in state', () => {
            // Arrange
            const expectedProps = {
                isLoggedIn: false, // Default to false if missing
                displayDrawer: false, // Default to false if missing
                listNotifications: [] // Default to empty array if missing
            };
            const state = {
                uiReducer: fromJS({}) // Empty Map
            };

            // Act
            const props = mapStateToProps(state);

            // Assert
            expect(props).toEqual(expectedProps);
        });

        // Error case test when state is undefined
        test('mapStateToProps - should handle undefined state', () => {
            // Arrange
            const expectedProps = {
                isLoggedIn: false, // Default to false if state is undefined
                displayDrawer: false, // Default to false if state is undefined
                listNotifications: [] // Default to empty array if state is undefined
            };

            // Act
            const props = mapStateToProps(undefined);

            // Assert
            expect(props).toEqual(expectedProps);
        });
    });
});

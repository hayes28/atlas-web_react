import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

// Prevent Aphrodite from using injected styles, which can cause issues in Jest environment
beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
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

    describe('when isLoggedIn is true', () => {
        beforeEach(() => {
            wrapper = shallow(<App isLoggedIn={true} />);
        });

        it('does not include Login', () => {
            expect(wrapper.containsMatchingElement(<Login />)).toEqual(false);
        });

        it('includes CourseList', () => {
            expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(true);
        });
    });
    test('logOut function is called on Ctrl+h press', () => {
        const logOutMock = jest.fn();
        const { fireEvent, render } = require('@testing-library/react');
        window.alert = jest.fn();

        render(<App logOut={logOutMock} />);

        fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

        expect(logOutMock).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith('Logging you out');

        window.alert.mockRestore();
    });
});

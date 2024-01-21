import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { render, fireEvent } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

beforeEach(() => {
    jest.clearAllMocks();
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
            expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(false);
        });
    });
    test('logOut function is called on Ctrl+h press', () => {
        const logOutMock = jest.fn();
        window.alert = jest.fn();

        render(<App logOut={logOutMock} />);

        fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

        expect(logOutMock).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith('Logging you out');

        window.alert.mockRestore();
    });

    it('checks that the default state of displayDrawer is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toBe(false);
    });

    it('checks that handleDisplayDrawer sets state of displayDrawer to true', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state().displayDrawer).toBe(true);
    });

    it('checks that handleHideDrawer sets state of displayDrawer back to false', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state().displayDrawer).toBe(false);
    });
});

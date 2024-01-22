// Header.test.js
import React from 'react'
import { shallow, mount } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('render img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img').length).toBe(1);
        expect(wrapper.find('h1').length).toBe(1);
    });

    describe('<Header />', () => {
        it('mounts with a default context value and does not show the logoutSection', () => {
            const wrapper = mount(
                <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
                    <Header />
                </AppContext.Provider>
            );
            expect(wrapper.find('#logoutSection').length).toBe(0);
        });

        it('mounts with a user logged in and shows the logoutSection', () => {
            const wrapper = mount(
                <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' } }}>
                    <Header />
                </AppContext.Provider>
            );
            expect(wrapper.find('#logoutSection').length).toBe(1);
        });

        it('calls the logOut function when the logout link is clicked', () => {
            const logOutSpy = jest.fn();
            const wrapper = mount(
                <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' }, logOut: logOutSpy }}>
                    <Header />
                </AppContext.Provider>
            );
            wrapper.find('span').simulate('click');
            expect(logOutSpy).toHaveBeenCalled();
        });
    });
});

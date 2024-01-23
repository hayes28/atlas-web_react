// Login.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
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

describe('Login', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('renders Login text', () => {
        const wrapper = shallow(<Login />);
        const paragraphText = wrapper.find('p').text();
        console.log(paragraphText);
        expect(paragraphText.includes('Login')).toBe(true);
    });

    it('renders 2 input tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(3);
    });

    it('renders 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label')).toHaveLength(2);
    });
    it('submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.props().disabled).toBe(true);
    });

    it('submit button is enabled when both email and password are entered', () => {
        const wrapper = shallow(<Login />);
        const emailInput = wrapper.find('input[type="email"]');
        const passwordInput = wrapper.find('input[type="password"]');

        emailInput.simulate('change', { target: { value: 'user@example.com', name: 'email' } });
        passwordInput.simulate('change', { target: { value: 'password123', name: 'password' } });

        wrapper.update(); // Make sure the component updates its state

        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.props().disabled).toBe(false);
    });
});

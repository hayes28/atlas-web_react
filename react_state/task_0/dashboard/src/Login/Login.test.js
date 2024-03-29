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
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('renders 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});

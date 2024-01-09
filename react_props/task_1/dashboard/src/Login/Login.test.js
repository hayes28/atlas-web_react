// Login.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('renders Login text', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.text().includes('Login')).toBe(true);
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

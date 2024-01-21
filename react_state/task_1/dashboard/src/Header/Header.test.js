// Header.test.js
import React from 'react'
import { shallow } from 'enzyme';
import Header from './Header';
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
});

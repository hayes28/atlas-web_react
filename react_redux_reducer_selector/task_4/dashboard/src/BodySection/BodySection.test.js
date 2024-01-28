import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection.js';
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

describe('BodySection', () => {
    it('renders correctly with children and an h2 element', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );

        expect(wrapper.find('h2').text()).toBe('test title');
        expect(wrapper.find('p').text()).toBe('test children node');
    });
});

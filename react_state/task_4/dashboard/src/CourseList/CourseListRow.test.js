// CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
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

describe('<CourseListRow />', () => {
    it('renders one cell with colspan when isHeader is true and textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="First" />);
        expect(wrapper.find('th').length).toBe(1);
        expect(wrapper.find('th').prop('colSpan')).toBe("2");
    });

    it('renders two cells when isHeader is true and textSecondCell is not null', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="First" textSecondCell="Second" />);
        expect(wrapper.find('th').length).toBe(2);
    });

    it('renders correctly two td elements within a tr element when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="First" textSecondCell="Second" />);
        expect(wrapper.find('td').length).toBe(2);
    });
});

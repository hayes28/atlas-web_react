import React from 'react';
import { mount, shallow } from 'enzyme';
import CourseList from './CourseList';
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

describe('<CourseList />', () => {
    // Suppress Aphrodite style injection before each test
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    // Clear the suppression and resume normal style injection after each test
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('renders without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correctly if listCourses is empty or not passed', () => {
        let wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.containsMatchingElement(<CourseListRow textFirstCell='No course available yet' isHeader={false} />)).toBe(true);

        wrapper = shallow(<CourseList />);
        expect(wrapper.containsMatchingElement(<CourseListRow textFirstCell='No course available yet' isHeader={false} />)).toBe(true);
    });

    it('renders the correct number of rows', () => {
        const listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 }
        ];
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.find(CourseListRow).length).toBe(listCourses.length);
    });
});

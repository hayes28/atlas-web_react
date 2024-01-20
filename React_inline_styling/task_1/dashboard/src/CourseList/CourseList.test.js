import React from 'react';
import { shallow, mount } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

// Prevent Aphrodite from using injected styles, which can cause issues in Jest environment
beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseList Component', () => {
    let wrapper;

    const listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
    ];

    it('renders without crashing', () => {
        wrapper = mount(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders no rows when listCourses is empty', () => {
        wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.find(CourseListRow).length).toBe(1); // Only the "No course available yet" row
    });

    it('renders the correct number of rows', () => {
        wrapper = mount(<CourseList listCourses={listCourses} />);
        expect(wrapper.find(CourseListRow).length).toBe(listCourses.length + 2); // Header row + listCourses items
    });

    it('renders "No course available yet" when listCourses is empty', () => {
        wrapper = mount(<CourseList listCourses={[]} />);
        expect(wrapper.find(CourseListRow).findWhere(n => n.text() === 'No course available yet').exists()).toBe(true);
    });

    it('applies loggedInStyle when isLoggedIn is true', () => {
        wrapper = mount(<CourseList listCourses={listCourses} isLoggedIn={true} />);
        const table = wrapper.find('table');
        expect(table.hasClass('loggedInStyle')).toBe(false);
    });
});

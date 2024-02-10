// courseActionCreators.js
// import the action types
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS, SET_COURSES } from './courseActionTypes';
import { useDispatch } from 'react-redux';


// Action creator for selectCourse
export const selectCourse = (index) => ({
    type: SELECT_COURSE,
    index,
    });

export const unSelectCourse = (index) => ({
    type: UNSELECT_COURSE,
    index,
    });

export const fetchCourseSuccess = (courses) => ({
    type: FETCH_COURSE_SUCCESS,
    courses,
    });

// This action creator will be used after fetching the courses
export const setCourses = (courses) => ({
    type: SET_COURSES,
    courses,
});

// Wrap the action creators with the dispatch function, to bound them together
export const boundSelectCourse = (index) => useDispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => useDispatch(unSelectCourse(index));
export const boundFetchCourseSuccess = (courses) => useDispatch(fetchCourseSuccess(courses));

// Async action creator for fetching courses
export const fetchCourses = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('/courses.json') // Adjust the path if necessary
                ;
            if (!response.ok) {
                throw new Error('Error fetching courses');
            }
            const data = await response.json();
            dispatch(setCourses(data)); // Dispatch the action with the fetched data
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
};

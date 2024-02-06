// courseActionCreators.js
// import the action types
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';
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

// Wrap the action creators with the dispatch function, to bound them together
export const boundSelectCourse = (index) => useDispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => useDispatch(unSelectCourse(index));
export const boundFetchCourseSuccess = (courses) => useDispatch(fetchCourseSuccess(courses));

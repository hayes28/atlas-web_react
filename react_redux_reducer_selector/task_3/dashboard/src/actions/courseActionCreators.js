// courseActionCreators.js
// import the action types
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
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

// Wrap the action creators with the dispatch function, to bound them together
export const boundSelectCourse = (index) => useDispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => useDispatch(unSelectCourse(index));

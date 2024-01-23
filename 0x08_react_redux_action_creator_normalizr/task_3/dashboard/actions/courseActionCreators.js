// courseActionCreators.js
// import the action types
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Action creator for selectCourse
export const selectCourse = (index) => ({
    type: SELECT_COURSE,
    index,
    });

export const unSelectCourse = (index) => ({
    type: UNSELECT_COURSE,
    index,
    });


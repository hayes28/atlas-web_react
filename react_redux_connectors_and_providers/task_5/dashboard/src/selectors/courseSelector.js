// courseSelector.js
import { List } from 'immutable';
import { createSelector } from 'reselect';

const getCoursesMap = (state) => state.courses;

export const getAllCourses = createSelector(
    [getCoursesMap],
    (coursesMap) => {
        // Return an empty sequence if coursesMap is not what we expect
        if (!coursesMap || typeof coursesMap.valueSeq !== 'function') {
            return List();
        }
        return coursesMap.valueSeq();
    }
);

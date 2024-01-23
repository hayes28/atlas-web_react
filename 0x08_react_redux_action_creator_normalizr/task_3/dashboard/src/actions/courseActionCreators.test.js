// courseActionCreators.test.js
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
    it('selectCourse returns the correct action type and index', () => {
        const index = 1;
        const expectedAction = {
            type: SELECT_COURSE,
            index,
        };
        expect(selectCourse(index)).toEqual(expectedAction);
    });

    it('unSelectCourse returns the correct action type and index', () => {
        const index = 1;
        const expectedAction = {
            type: UNSELECT_COURSE,
            index,
        };
        expect(unSelectCourse(index)).toEqual(expectedAction);
    });
});

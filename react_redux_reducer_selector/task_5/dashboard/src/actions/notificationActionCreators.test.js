// notificationActionCreators.test.js
import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

describe('notificationActionCreators', () => {
    it('markAsRead returns the correct action type and index', () => {
        const index = 1;
        const expectedAction = {
            type: MARK_AS_READ,
            index,
        };
        expect(markAsRead(index)).toEqual(expectedAction);
    });

    it('setNotificationFilter returns the correct action type and filter', () => {
        const filter = 'DEFAULT';
        const expectedAction = {
            type: SET_TYPE_FILTER,
            filter,
        };
        expect(setNotificationFilter(filter)).toEqual(expectedAction);
    });
});

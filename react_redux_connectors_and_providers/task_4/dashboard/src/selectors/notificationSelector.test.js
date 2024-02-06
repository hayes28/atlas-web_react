// notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
    const initialState = fromJS({
        filter: 'DEFAULT',
        notifications: {
            '1': { id: 1, type: 'urgent', value: 'New course available', isRead: false },
            '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
            '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
        },
    });

    test('filterTypeSelected should return the filter type', () => {
        const selected = filterTypeSelected(initialState);
        expect(selected).toEqual('DEFAULT');
    });

    test('getNotifications should return all notifications', () => {
        const selected = getNotifications(initialState);
        expect(selected.toJS()).toEqual(initialState.get('notifications').toJS());
    });

    test('getUnreadNotifications should return unread notifications', () => {
        const selected = getUnreadNotifications(initialState);
        const expectedUnread = initialState
            .get('notifications')
            .filter((notification) => !notification.get('isRead'));
        expect(selected.toJS()).toEqual(expectedUnread.toJS());
    });
});

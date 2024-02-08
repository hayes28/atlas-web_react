// notificationSelector.js
import { createSelector } from 'reselect';
import { notificationsNormalizer } from '../schema/notifications';

export const getFilter = (state) => state.get('filter');
export const getNotificationsMap = (state) => state.notification.get('notifications');


export const filterTypeSelected = createSelector(
    [getFilter],
    (filter) => filter
);

export const getNotifications = createSelector(
    [getNotificationsMap],
    (notificationsMap) => notificationsMap
);

export const getUnreadNotifications = createSelector(
    [getNotificationsMap],
    (notificationsMap) => {
        if (!notificationsMap) {
            return [];
        }
        return notificationsMap.valueSeq().toArray()
            .filter(notification => !notification.get('isRead'))
            .map(notification => ({
                id: notification.getIn(['context', 'guid']),
                type: notification.getIn(['context', 'type']),
                value: notification.getIn(['context', 'value']),
            }));
    }
);

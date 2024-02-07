// notificationSelector.js
import { createSelector } from 'reselect';
import { notification } from '../schema/notifications';

export const getFilter = (state) => state.get('filter');
export const getNotificationsMap = (state) => state.notification.notifications;


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
        return Object.values(notificationsMap)
            .filter(notification => !notification.isRead)
            .map(notification => ({
                id: notification.id,
                type: notification.type,
                value: notification.value,
            }))
            .valueSeq()
            .toArray();
    }
);

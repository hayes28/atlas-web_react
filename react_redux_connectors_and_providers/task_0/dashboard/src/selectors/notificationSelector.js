// notificationSelector.js
import { createSelector } from 'reselect';

const getFilter = (state) => state.get('filter');
const getNotificationsMap = (state) => state.get('notifications');

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
    (notificationsMap) => notificationsMap.filter((notification) => !notification.get('isRead'))
);

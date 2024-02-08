// notificationActionCreators.js
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from './notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

// Action creator for markAsAread
export const markAsRead = (id) => ({
    type: MARK_AS_READ,
    id,
});

export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter,
});

export const setNotifications = (notifications) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications,
});

export const setLoadingState = (isLoading) => ({
    type: SET_LOADING_STATE,
    isLoading,
});

// new action creator to fetch notifications
export const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));
        fetch('/notifications.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Define the normalized variable by calling the normalizer function
                const normalizedData = notificationsNormalizer(data);
                console.log('Normalized Data:', normalizedData);
                dispatch(setNotifications(normalizedData));
            })
            .catch(error => {
                console.error('Error fetching notifications:', error);
            })
            .finally(() => {
                dispatch(setLoadingState(false));
            });
    };
};


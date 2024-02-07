// notificationActionCreators.js
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from './notificationActionTypes';
import { useDispatch } from 'react-redux';
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
        dispatch(setLoadingState(true)); // set loading state to true
        fetch('/notifications.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // console.log('Notifications data:', data); // Log the data to the console
                // Make sure data is not undefined before dispatching
                if (data) {
                    const normalized = notificationsNormalizer(data);
                    dispatch(setNotifications(normalized));
                } else {
                    throw new Error('No data received');
                }
            })
            .catch(error => {
                console.error('Error fetching notifications:', error);
            })
            .finally(() => {
                dispatch(setLoadingState(false)); // set loading state to false
            });
    };
};

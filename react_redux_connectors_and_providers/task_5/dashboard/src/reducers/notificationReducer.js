// notificaitonReducer.js
import { List, Map, fromJS } from 'immutable';
import * as actionTypes from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';


const initialState = Map({
    filter: 'DEFAULT',
    notifications: List(),
    messages: Map(),
    users: Map(),
    loading: false,
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING_STATE:
            return state.set('loading', action.loading);
        case actionTypes.FETCH_NOTIFICATIONS_SUCCESS:
            return state.mergeDeep({
                id: fromJS(action.notifications.id || {}),
                notifications: fromJS(action.notifications || []),
                users: fromJS(action.notifications.users || {}),
                messages: fromJS(action.notifications.messages || {}),
            });
        // When MARK_AS_READ, use the setIn function from Immutable to update the value of the item in the state
        case actionTypes.MARK_AS_READ:
            return state.update('notifications', notifications =>
                notifications.map(notification =>
                    notification.getIn(['context', 'guid']) === action.id
                        ? notification.setIn(['context', 'isRead'], true)
                        : notification
                )
            );
        // When SET_TYPE_FILTER, use the set function from Immutable to update the value of the state
        case actionTypes.SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
};

export default notificationReducer;

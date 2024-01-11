// NotificationItem component
import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

// Modify the li element to call the markAsRead function when clicked
const NotificationItem = ({ type, html, value, id, markAsRead }) => {
    const handleClick = () => markAsRead(id);
    if (html) {
        return (
            <li
                data-priority={type}
                dangerouslySetInnerHTML={html}
                onClick={handleClick}
            />
        );
    }
    return (
        <li data-priority={type} onClick={handleClick}>
            {value}
        </li>
    );
};

NotificationItem.propTypes = {
    listCourses: PropTypes.arrayOf(NotificationItemShape),
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    listCourses: [],
    markAsRead: () => {},
};

export default NotificationItem;

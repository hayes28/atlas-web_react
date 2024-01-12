// NotificationItem component
import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';


const NotificationItem = ({ type, html, value }) => {
    if (html) {
        return (
            <li data-notification-type={type} dangerouslySetInnerHTML={html} />
        );
    }
    return (
        <li data-notification-type={type}>{value}</li>
    );
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    value: PropTypes.string,
};

NotificationItem.defaultProps = {
    type: 'default',
};

export default NotificationItem;
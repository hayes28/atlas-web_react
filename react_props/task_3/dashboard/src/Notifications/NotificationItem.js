// NotificationItem component
import React from 'react';
import './Notifications.css';

function NotificationItem({ type, html, value }) {
    const className = `NotificationsItem ${type}`; // Add class based on type
    if (html) {
        return <li className={className} data-notification-type={type} dangerouslySetInnerHTML={html} />;
    }
    return <li className={className} data-notification-type={type}>{value}</li>;
}

export default NotificationItem;

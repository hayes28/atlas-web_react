// Create a Notifications element
import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer, listNotifications }) {

    // inline styling
    const buttonStyle = {
        position: "absolute",
        background: "transparent",
        padding: "0",
        cursor: "pointer",
    };

    // inline styling
    const iconStyle = {
        width: "15px",
        height: "15px",
    };

    return (
        <div className='notification-menu'>
        <div className="Notifications">Your notifications</div>
        {displayDrawer && (
                <div className="menuItem">
                    {listNotifications.length > 0 && (
                        <p>
                            Here is the list of notifications
                        </p>
                    )}
                    <ul>
                        {listNotifications.length === 0 ? (
                            <NotificationItem value='No new notification for now' />
                        ) : (
                            listNotifications.map(notification => (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                />
                            ))
                        )}
                    </ul>
                <button
                    style={buttonStyle}
                    aria-label="Close"
                    onClick={() => console.log("Close button has been clicked")}
                >
                    <img
                        style={iconStyle}
                        src={closeIcon}
                        alt="Close"
                    />
                </button>
            </div>
            )}
        </div>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;

// Create a Notifications element
import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications() {

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
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem
                    type="urgent"
                    html={{ __html: getLatestNotification() }}
                />
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
    );
}

export default Notifications;

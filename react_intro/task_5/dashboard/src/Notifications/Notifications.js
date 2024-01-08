// Create a Notifications element
import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

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
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    data-priority="urgent"
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                ></li>
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

// Create a Notifications element
import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

// Turning this into a class component
class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {

        const { displayDrawer, listNotifications } = this.props;

        const buttonStyle = {
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
        };

        const iconStyle = {
            width: '15px',
            height: '15px',
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
                                    onClick={() => this.markAsRead(notification.id)}
                                />
                            ))
                        )}
                    </ul>
                <button
                    style={buttonStyle}
                    aria-label="Close"
                    onClick={() => console.log('Close button has been clicked')}
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

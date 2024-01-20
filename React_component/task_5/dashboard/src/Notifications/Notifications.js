import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }
    handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    render() {
        const { displayDrawer, listNotifications } = this.props;
        // Debugging: Log the listNotifications
        console.log('listNotifications:', listNotifications);

        const buttonStyle = {
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
        };

        return (
            <div id='notification-menu'>
                <div className='notifications'>
                    Your notifications
                </div>
                {displayDrawer && (
                    <div className='menuItem'>
                        <img src={closeIcon} alt='close icon'
                            style={{ height: '15px', position: 'absolute', top: 10, right: 10 }}
                            aria-label='Close'
                            onClick={this.handleButtonClick}
                        ></img>

                        {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
                        <ul>
                            {listNotifications.length === 0 ? (
                                <p>No new notification for now</p>
                            ) : (
                                listNotifications.map(({ type, html, value, id }) => {
                                    if (typeof id === 'undefined') {
                                        console.warn('Notification is missing an id:', { type, html, value });
                                        return null; // Skip rendering this item
                                    }
                                    return (
                                        <NotificationItem key={id} id={id} type={type} html={html} value={value} markAsRead={this.props.markAsRead} />
                                    );
                                })
                            )}
                            <button
                                style={buttonStyle}
                                aria-label="Close"
                                onClick={this.handleButtonClick}
                            >
                            </button>
                        </ul>
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

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
    menuItem: {
        position: 'relative',
        border: 'thin dashed red',
        padding: '6px',
        display: 'block',
        width: '30%',
        marginLeft: 'auto',
        marginRight: '10px',
        marginTop: '25px',
        minWidth: '300px',
        minHeight: '150px',
        maxHeight: '300px',
        overflow: 'auto',
    },
    notifications: {
        position: 'absolute',
        top: 0,
        right: 0,
        marginBottom: '10px',
        display: 'block',
        cursor: 'pointer',
        padding: '5px 20px',
        zIndex: 1,
    },
    paragraph: {
        fontSize: '20px',
        borderBottom: '1px solid red',
    },
    list: {
        listStyle: 'none',
        paddingLeft: 0,
    },
    listItem: {
        background: '#fff',
        marginBottom: '5px',
    },
    listItemDefault: {
        color: 'blue',
    },
    listItemUrgent: {
        color: 'red',
    },
    closeButton: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
    },
});

class Notifications extends React.Component {
    // Define the markAsRead method
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
        // Additional logic for marking as read
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    render() {
        const { displayDrawer, listNotifications } = this.props;

        return (
            <div id='notification-menu'>
                <div className={css(styles.notifications)}>
                    Your notifications
                </div>
                {displayDrawer && (
                    <div className={css(styles.menuItem)}>
                        <button
                            className={css(styles.closeButton)}
                            aria-label="Close"
                            onClick={this.handleButtonClick}
                        >
                            <img src={closeIcon} alt="Close" style={{ height: '15px' }} />
                        </button>
                        {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
                        <ul>
                            {listNotifications.length === 0 ? (
                                <p>No new notification for now</p>
                            ) : (
                                listNotifications.map(({ type, html, value, id }) => (
                                    <NotificationItem
                                        key={id}
                                        id={id}
                                        type={type}
                                        html={html}
                                        value={value}
                                        markAsRead={this.markAsRead}
                                        className={css(type === 'default' ? styles.listItemDefault : styles.listItemUrgent)}
                                    />
                                ))
                            )}
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

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
        marginTop: '25px',
        minWidth: '300px',
        minHeight: '150px',
        overflow: 'auto',
        '@media screen and (max-width: 900px)': {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            margin: 0,
            padding: '0px',
            fontSize: '20px',
            backgroundColor: 'white',
            zIndex: 10,
            border: 'none',
        },
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
        '@media screen and (max-width: 900px)': {
            display: 'none',
        },
    },
    notificationMenu: {
        float: 'right',
        '@media screen and (max-width: 900px)': {
            float: 'unset',
        },
    },
    paragraph: {
        fontSize: '20px',
    },
    list: {
        listStyle: 'none',
        paddingLeft: 0,
        margin: 0,
        width: '100%',
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
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    render() {
        const { displayDrawer, listNotifications } = this.props;

        // Define containerStyle based on displayDrawer
        const containerStyle = displayDrawer ? css(styles.menuItem) : '';

        return (
            <div id='notificationMenu' className={containerStyle}>
                {displayDrawer && (
                    <>
                        <div className={css(styles.notifications, styles.notificationMenu)}>
                            Your notifications
                        </div>
                        <button
                            className={css(styles.closeButton)}
                            aria-label="Close"
                            onClick={this.handleButtonClick}
                        >
                            <img src={closeIcon} alt="Close" style={{ height: '15px' }} />
                        </button>
                        {listNotifications.length > 0 && <p className={css(styles.paragraph)}>Here is the list of notifications</p>}
                        <ul className={css(styles.list)}>
                            {listNotifications.length === 0 ? (
                                <p>No new notification for now</p>
                            ) : (
                                listNotifications.map(({ type, html, value, id }) => (
                                    <NotificationItem
                                        key={id}
                                        type={type}
                                        html={html}
                                        value={value}
                                        markAsRead={this.markAsRead}
                                    />
                                ))
                            )}
                        </ul>
                    </>
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

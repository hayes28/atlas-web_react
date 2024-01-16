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
        padding: '1%',
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
        position: 'fixed',
        top: 0,
        right: 0,
        marginBottom: '10px',
        display: 'block',
        cursor: 'pointer',
        padding: '5px 20px',
        zIndex: 1,
        '@media screen and (max-width: 900px)': {
            position: 'absolute',
            top: 0,
            right: 0,
            marginBottom: '10px',
            display: 'block',
            cursor: 'pointer',
            padding: '5px 20px',
            zIndex: 1,
            fontSize: '20px',
        },
    },
    notificationMenu: {
        textAlign: 'end',
        '@media screen and (max-width: 900px)': {
            display: 'none',
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
    bounceNote: {
        ':hover': {
            animationName: [
                {
                    '0%': { opacity: 0.5 },
                    '100%': { opacity: 1 },
                },
                {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-5px)' },
                    '100%': { transform: 'translateY(5px)' },
                },
            ],
            animationDuration: ['1s', '0.5s'],
            animationIterationCount: [3, 3],
        },
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
                        <div className={css(styles.notifications, styles.notificationMenu, styles.bounceNote)}>
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

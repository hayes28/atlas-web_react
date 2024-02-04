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
        backgroundColor: 'white',
        padding: '10px',
        width: '30%',
        textAlign: 'left',
        float: 'right',
        right: 0,
        top: 0,
        '@media screen and (max-width: 900px)': {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            margin: 0,
            fontSize: '20px',
            backgroundColor: 'white',
            zIndex: 2,
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
        fontSize: '20px',
        '@media screen and (max-width: 900px)': {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            marginBottom: '10px',
            display: 'block',
            cursor: 'pointer',
            padding: 0,
            zIndex: 1,
            fontSize: '20px',
        },
    },
    notificationMenu: {
        position: 'relative',
        textAlign: 'end',
        '@media screen and (max-width: 900px)': {
            position: 'relative',
            width: '100%',
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
        cursor: 'pointer',
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
        zIndex: 3,
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
                    '25%': { transform: 'translateY(-5px)' },
                    '50%': { transform: 'translateY(5px)' },
                    '75%': { transform: 'translateY(-5px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
            ],
            animationDuration: '1s, 0.5s',
            animationIterationCount: 3,
            animationTimingFunction: 'ease-in-out',
        },
        float: 'right',
        cursor: 'pointer',
        zIndex: 1,
    },
});

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    };
    // Define the markAsRead method
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
        console.log('markNotificationAsRead prop:', this.props.markNotificationAsRead);
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.displayDrawer !== this.props.displayDrawer ||
            nextProps.listNotifications.length !== this.props.listNotifications.length;
    }

    componentDidUpdate() {
        console.log('Component has updated');
    };

    handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    render() {
        // console.log('listNotifications prop:', this.props.listNotifications);
        const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

        return (
            <div id='notificationMenu' className={css(styles.notificationMenu)}>
                {!displayDrawer && (
                    <div className={`${css(styles.notifications, styles.bounceNote)} notification-trigger`} onClick={handleDisplayDrawer}>
                        Your notifications
                    </div>
                )}
                {displayDrawer && (
                    <>
                        <button
                            id='closeButton' className={css(styles.closeButton)}
                            aria-label="Close"
                            onClick={handleHideDrawer}
                        >
                            <img src={closeIcon} alt="Close" style={{ height: '15px' }} />
                        </button>
                        <div id='menuItem' className={css(styles.menuItem)}>
                            {listNotifications.length > 0 && <p className={css(styles.paragraph)}>Here is the list of notifications</p>}
                            <ul className={css(styles.list)}>
                                {listNotifications.map((item) => (
                                    <NotificationItem
                                        key={item.id}
                                        type={item.type}
                                        value={item.value}
                                        html={item.html}
                                        markAsRead={() => markNotificationAsRead(item.id)}
                                    />
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
};

export default Notifications;

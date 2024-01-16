import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
    listItems: {
        '@media screen and (max-width: 900px)': {
            borderBottom: '3px solid black',
            fontSize: '20px',
            padding: '10px 8px',
            listStyleType: 'none',
        },
    },
});

const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => {
    const className = type === 'default' ? styles.default : styles.urgent;

    if (html) {
        return (
            <li
                className={`${css(styles.listItems)} ${css(className)}`}
                data-notification-type={type}
                dangerouslySetInnerHTML={html}
                onClick={() => markAsRead(id)}
            />
        );
    }
    return (
        <li
            className={`${css(styles.listItems)} ${css(className)}`}
            data-notification-type={type}
            onClick={() => markAsRead(id)}
        >
            {value}
        </li>
    );
});

NotificationItem.propTypes = {
    ...NotificationItemShape.propTypes,
    markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
    type: 'default',
};


export default NotificationItem;

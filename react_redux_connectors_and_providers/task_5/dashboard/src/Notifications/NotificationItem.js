// NotificationItem.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
            width: '100%',
            listStyleType: 'none',
        },
    },
});

const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => {
    console.log('NotificationItem props:', { id, type, value, html });
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
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired, // Changed from number to string
};

NotificationItem.defaultProps = {
    type: 'default',
};


export default NotificationItem;

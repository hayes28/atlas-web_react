import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class NotificationItem extends React.PureComponent {
    handleClick = () => {
        const { id, markAsRead } = this.props;
        markAsRead(id);
    };

    render() {
        const { type, html, value, id } = this.props;

        if (html) {
            return (
                <li
                    data-priority={type}
                    dangerouslySetInnerHTML={html}
                    onClick={this.handleClick}
                />
            );
        }
        return (
            <li data-priority={type} onClick={this.handleClick}>
                {value}
                {id}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
    id: PropTypes.number.isRequired,
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    markAsRead: () => { },
};

export default NotificationItem;

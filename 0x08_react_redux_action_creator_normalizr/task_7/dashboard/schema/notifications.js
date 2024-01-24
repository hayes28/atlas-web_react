import * as notificationData from '../dist/notifications.json';
import { normalize, schema } from 'normalizr';

// define the schema for the notification data
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

// normalize the data according to the schema
const normalizedData = normalize(notificationData.default, [notification]);

const getAllNotificationsByUser = (userId) => {
    // Access the notifications data via normalizedData.entities
    const notifications = Object.values(normalizedData.entities.notifications || {});
    const userNotifications = notifications.filter(
        (notification) => normalizedData.entities.users[notification.author].id === userId);

    // Map each notification to its full structure, including message details
    return userNotifications.map((notification) => {
        const messageDetails = normalizedData.entities.messages[notification.context];
        return {
            guid: messageDetails.guid,
            isRead: messageDetails.isRead,
            type: messageDetails.type,
            value: messageDetails.value
        };
    });
};

export {getAllNotificationsByUser, normalizedData};

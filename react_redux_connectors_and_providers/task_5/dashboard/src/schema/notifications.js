// src/schema/notifications.js
import { normalize, schema } from 'normalizr';

// define the schema for the notification data
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid'
});
export const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

export function getAllNotificationsByUser(userId) {
    return Object.values(normalizedData.entities.notifications).filter((message) => message.author === userId)
    .map((message) => normalizedData.entities.messages[message.context]);
}

export function notificationsNormalizer(data) {
    const normalizedData = normalize({ notifications: data }, { notifications: [notification] });
    console.log('Normalized Data:', normalizedData);
    return normalizedData.entities;
}

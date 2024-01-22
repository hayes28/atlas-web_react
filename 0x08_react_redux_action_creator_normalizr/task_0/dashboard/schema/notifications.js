import * as notificationData from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    // return list of context objects
    return notificationData.default
        .filter((notification) => notification.author.id === userId)
        .map((notification) => notification.context);
}

export default getAllNotificationsByUser;

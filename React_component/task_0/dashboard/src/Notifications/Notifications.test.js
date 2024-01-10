import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
    it("renders without crashing", () => {
        shallow(<Notifications />);
    });

    it('displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('renders the text "Here is the list of notifications" only when listNotifications is not empty', () => {
        const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
    });

    it("renders 'No new notification for now' when listNotifications is empty", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.contains('Here is the list of notifications')).toBe(false);
        expect(wrapper.containsMatchingElement(<NotificationItem value='No new notification for now' />)).toBe(true);
    });

    it('renders the right number of NotificationItem when listNotifications is passed', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
        ];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem).length).toBe(listNotifications.length);
    });
});

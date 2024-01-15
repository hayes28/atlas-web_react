import React from "react";
import { shallow, mount } from "enzyme";
import Notifications from "./Notifications";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

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
        expect(wrapper.contains(<p>No new notification for now</p>)).toBe(true);
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

    it('calls markAsRead with the right message when a NotificationItem is clicked', () => {
        const markAsReadMock = jest.fn();
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available', markAsRead: markAsReadMock }
        ];
        const wrapper = mount(
            <Notifications displayDrawer={true} listNotifications={listNotifications} />
        );
        wrapper.find(NotificationItem).first().simulate('click');
        expect(markAsReadMock).toHaveBeenCalledWith(1);
    });

    it('does not re-render when listNotifications prop is the same', () => {
        const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

        // Spy on shouldComponentUpdate to check if it's called with the right parameters
        const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: listNotifications });

        // shouldComponentUpdate should return false
        expect(shouldUpdate).toBe(false);
    });

    it('does re-render when listNotifications prop has more items', () => {
        const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

        // New list with more items than the original list
        const longerListNotifications = [
            ...listNotifications,
            { id: 2, type: 'urgent', value: 'New resume available' }
        ];

        // Spy on shouldComponentUpdate to check if it's called with the right parameters
        const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: longerListNotifications });

        // shouldComponentUpdate should return true
        expect(shouldUpdate).toBe(true);
    });
});

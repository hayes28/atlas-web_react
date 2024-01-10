// Notifications.test.js
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
    it("renders without crashing", () => {
        shallow(<Notifications />);
    });

    it('renders three NotificationItem components', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.contains('Here is the list of notifications')).toBe(true);
    });

    it('first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const firstItem = wrapper.find(NotificationItem).first();
        expect(firstItem.props().type).toEqual('default');
        expect(firstItem.shallow().text()).toContain('New course available');
    });

    it('menu item is displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem').length).toBe(1);
        expect(wrapper.find('.Notifications').length).toBe(0);
    });

    it('menu item and Notifications are displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find('.menuItem').length).toBe(1);
        expect(wrapper.find('.Notifications').length).toBe(1);
    });
});

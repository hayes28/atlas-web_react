import React from "react";
import { shallow, mount } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

beforeEach(() => {
    jest.clearAllMocks();
});


describe("<Notifications />", () => {
    it("renders without crashing", () => {
        shallow(<Notifications />);
    });

    it('displays the menuItem div when displayDrawer is false', () => {
        const wrapper = mount(<Notifications />);
        const menuItemElement = wrapper.find('#menuItem');
        expect(menuItemElement.exists()).toBe(false);
    });

    it('displays the menuItem div when displayDrawer is true', () => {
        const wrapper = mount(<Notifications displayDrawer={true} />);
        const menuItemElement = wrapper.find('#menuItem');
        expect(menuItemElement.exists()).toBe(true);
    });

    it('renders the text "Here is the list of notifications" only when listNotifications is not empty', () => {
        const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
    });

    it('tests that Notifications renders when list is not empty', () => {
        const wrapper = shallow(
            <Notifications
                displayDrawer={true}
                listNotifications={[
                    { id: 1, type: 'default', value: 'New course available' },
                    { id: 2, type: 'urgent', value: 'New resume available' },
                    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
                ]}
            />
        );
        const element = wrapper.find(NotificationItem);
        expect(element.length).toBe(3);
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

    // it('calls markAsRead with the right message when a NotificationItem is clicked', () => {

    //     const markAsReadMock = jest.fn();
    //     const listNotifications = [
    //         { id: 1, type: 'default', value: 'New course available' },
    //         { id: 2, type: 'urgent', value: 'New resume available' },
    //         { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    //     ];

    //     const wrapper = shallow(
    //         <Notifications
    //             displayDrawer={true}
    //             listNotifications={listNotifications}
    //             markAsRead={markAsReadMock}
    //         />
    //     );

    //     const firstNotificationItem = wrapper.find(NotificationItem).first();
    //     firstNotificationItem.simulate('click');
    //     expect(markAsReadMock).toHaveBeenCalledWith(1);
    // });

    // it('does not re-render when listNotifications prop is the same', () => {

    //     const listNotifications = [{ id: 1 }];

    //     const wrapper = shallow(
    //         <Notifications
    //             listNotifications={listNotifications}
    //         />
    //     );

    //     const nextProps = { listNotifications };

    //     // Simplify logic
    //     expect(
    //         wrapper.instance().shouldComponentUpdate(nextProps)
    //     ).toBe(false);

    // });

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

    it('verify that when calling the function update the props of the component', () => {
        const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const instance = wrapper.instance();
        instance.componentDidUpdate({ listNotifications: [] });
        expect(instance.props.listNotifications).toEqual(listNotifications);
    });

    it('verifies that clicking on the button calls handleHideDrawer', () => {
        const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(
            <Notifications
                displayDrawer={true}
                listNotifications={listNotifications}
                handleHideDrawer={handleHideDrawer}
            />
        );
        wrapper.find('#closeButton').simulate('click');
        expect(handleHideDrawer).toHaveBeenCalled();
    });

    it('verifies that clicking on the button calls handleDisplayDrawer', () => {
        const handleDisplayDrawer = jest.fn();
        const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
        const wrapper = shallow(
            <Notifications
                displayDrawer={false}
                listNotifications={listNotifications}
                handleDisplayDrawer={handleDisplayDrawer}
            />
        );
        wrapper.find('.notification-trigger').simulate('click');
        expect(handleDisplayDrawer).toHaveBeenCalled();
    });

});

// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem.js';
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

describe('NotificationItem', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" id={1} markAsRead={() => { }} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders with type and value props', () => {
        const wrapper = shallow(
            <NotificationItem type="default" value="test" id={123} markAsRead={() => { }} />
        );
        expect(wrapper.text()).toContain('test');
        expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    });

    it('renders the correct html', () => {
        const wrapper = shallow(
            <NotificationItem
                type="default"
                html={{ __html: '<u>test</u>' }}
                id={1}
                markAsRead={() => { }}
            />
        );
        expect(wrapper.html()).toContain('<u>test</u>');
    });

    it('calls markAsRead when clicked', () => {
        const markAsReadMock = jest.fn();
        // Include the required 'id' prop
        const wrapper = shallow(
            <NotificationItem
                type="default"
                value="test"
                id={1}
                markAsRead={markAsReadMock}
            />
        );
        wrapper.find('li').simulate('click');
        expect(markAsReadMock).toHaveBeenCalled();
    });

});

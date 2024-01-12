// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders with type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.text()).toContain('test');
        expect(wrapper.find('li').prop('data-priority')).toEqual('default');
    });

    it('renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });

    it('calls markAsRead when clicked', () => {
        const markAsReadMock = jest.fn();
        const wrapper = shallow(<NotificationItem type="default" value="test" markAsRead={markAsReadMock} />);
        wrapper.find('li').simulate('click');
        expect(markAsReadMock).toHaveBeenCalled();
    });
});
import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
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

describe('WithLogging HOC', () => {
    it('logs correctly with pure HTML', () => {
        const ConsoleSpy = jest.spyOn(console, 'log');

        // Create a component that renders pure HTML
        const WrappedComponent = WithLogging(() => <p />);
        const wrapper = mount(<WrappedComponent />);

        expect(ConsoleSpy).toHaveBeenCalledWith('Component Component is mounted');

        // Clean up and check unmount message
        wrapper.unmount();
        expect(ConsoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');

        ConsoleSpy.mockRestore();
    });

    it('logs correctly with Login component', () => {
        const ConsoleSpy = jest.spyOn(console, 'log');

        const WrappedLogin = WithLogging(Login);
        const wrapper = mount(<WrappedLogin />);

        expect(ConsoleSpy).toHaveBeenCalledWith('Component Login is mounted');

        wrapper.unmount();
        expect(ConsoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');

        ConsoleSpy.mockRestore();
    });
});

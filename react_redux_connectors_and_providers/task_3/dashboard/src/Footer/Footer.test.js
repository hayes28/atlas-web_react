// Footer.test.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('Footer', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders Copyright text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text().includes('Copyright')).toBe(true);
    });

    it('does not display Contact us link when logged out', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a').exists()).toBe(false);
    });

    it('displays Contact us link when logged in', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a').text()).toContain('Contact us');
    });
});

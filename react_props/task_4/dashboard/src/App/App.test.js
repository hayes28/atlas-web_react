// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe("App", () => {
    it("renders without crashing", () => {
        shallow(<App />);
    });

    it("contains the Notifications component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<Notifications />)).toEqual(true);
    });

    it("contains the Header component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
    });

    it("contains the Login component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
    });

    it("contains the Footer component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
    });

    it('does not display CourseList when isLoggedIn is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(false);
    });

    describe('when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn />);

        it('does not include Login', () => {
            expect(wrapper.containsMatchingElement(<Login />)).toEqual(false);
        });

        it('includes CourseList', () => {
            expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(true);
        });
    });
});

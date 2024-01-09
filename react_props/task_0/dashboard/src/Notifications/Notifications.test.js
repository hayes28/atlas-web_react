// Notifications.test.js
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
    it("renders without crashing", () => {
        shallow(<Notifications />);
    });

    it("renders three list items", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find("li").length).toEqual(3);
    });

    it("renders the text Here is the list of notifications", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find("p").text()).toContain(
            "Here is the list of notifications"
        );
    });
});
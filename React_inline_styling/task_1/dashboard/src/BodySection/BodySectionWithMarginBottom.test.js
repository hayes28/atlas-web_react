import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("BodySectionWithMarginBottom", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(
        <BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>
        );

        expect(wrapper.exists()).toBe(true);
    });

    it("renders correctly with children and an h2 element", () => {
        const wrapper = shallow(
        <BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>
        );

        expect(wrapper.find("BodySection")).toHaveLength(1);
        expect(wrapper.find("BodySection").prop("title")).toEqual("test title");
        expect(wrapper.find("BodySection").prop("children")).toEqual(
        <p>test children node</p>
        );
    });
    });

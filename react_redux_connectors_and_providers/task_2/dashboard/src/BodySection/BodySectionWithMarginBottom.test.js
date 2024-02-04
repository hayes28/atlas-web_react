import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";

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

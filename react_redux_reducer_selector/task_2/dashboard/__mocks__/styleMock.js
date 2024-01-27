// /__mocks__/styleMock.js
export const StyleSheet = {
    create: jest.fn(style => style),
};

export const css = jest.fn(className => className);

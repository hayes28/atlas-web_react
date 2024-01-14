# React Inline Styling Project

## Overview
This React project is an exploration of inline styling within a React application, with a focus on using CSS-in-JS tools like Aphrodite. It's designed to demonstrate the differences between external CSS files and inline styles, the use of media queries for responsive design, and how to add animations within the app.

## Learning Objectives
By the end of this project, learners will be able to:
- the differences between using a CSS file and inline styling
- how to use a CSS-in-JS tool like Aphrodite
- how to use conditions within JS to apply different styles
- how to use responsive design and make the application show a different UI according to the screen size
- how to create small animations within the app

## Requirements
- Ubuntu 18.04 LTS
- Node.js 12.x.x
- npm 6.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code

## Installation
```bash
git clone https://github.com/hayes28/atlas-web_react/tree/main/React_inline_styling

cd atlas-web_react/React_inline_styling

npm install
```
## Usage
```bash
npm start
```
## Resources
- [Aphrodite](https://github.com/Khan/aphrodite)
- [Inline styling](https://legacy.reactjs.org/docs/dom-elements.html)
- [Enzyme Render](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/render.html)
- [Enzyme Prop](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/prop.html)
- [CSS Viewport Units](https://www.w3schools.com/css/css_rwd_viewport.asp)
- [CSS Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
- [CSS Animations](https://www.w3schools.com/css/css3_animations.asp)

## Tasks

### Task 0: Inline Styling
- Update `CourseListRow.js` with inline styles for different row types.
- Ensure tests in `CourseListRow.test.js` pass with new styling.

### Task 1: Install Aphrodite and Refactor Styling
- Install Aphrodite and refactor components to use it.
- Update tests to accommodate new styling method.

### Task 2: Conditionally Applying Style
- Use Aphrodite to apply conditional styling in `NotificationItem.js`.
- Ensure all related tests pass.

### Task 3: Responsive Design
- Modify `Login.js` and `Notifications.js` to be responsive under 900px screen width.

### Task 4: Animation
- Create animations for notification menu hover and new notifications.

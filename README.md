# README for the Repository of the React projects for Atlas school

# Webpack Project

This project is an exploration of Webpack, a powerful module bundler for JavaScript applications. It serves as a practical guide to setting up Webpack for a basic project, including configuration of entry points, outputs, loaders, plugins, code splitting, and a development server.

## Objectives
- Understand the basic setup of Webpack and its core concepts.
- Learn to manage dependencies and devDependencies in a project.
- Utilize loaders to handle CSS and image files within Webpack.
- Implement plugins to extend Webpack's functionality.
- Configure Webpack to split code into chunks for optimized loading.
- Set up a Webpack dev server for development efficiency.

## Project Setup
- Clone the repository and install the required dependencies using `npm install`.
- Run Webpack builds using `npm run build` and start the dev server with `npm run start-dev`.

## Features
- Multi-entry configuration for modular code organization.
- CSS and image optimization for production builds.
- Development server configured on port 8564 with hot reloading.
- Inline source mapping for better debugging in development mode.
- Automatic `index.html` generation and build folder cleanup on builds.
- Code splitting to prevent duplication of code across chunks.

## Instructions
Each task folder (`task_0`, `task_1`, etc.) contains specific instructions and configurations for incremental setup and enhancement of the Webpack environment.


# React Intro Project

This project serves as an introduction to React, encapsulating the creation of a basic JavaScript application with React. It provides insights on using `create-react-app` for quick setup, understanding JSX, debugging with React Developer Tools, testing with Enzyme, and bundling with Webpack and Babel.

## Key Learnings
- Setting up a React application with `create-react-app`.
- Understanding and applying JSX in React components.
- Debugging React applications using browser developer tools.
- Utilizing Enzyme for component testing.
- Configuring and using Webpack & Babel for React applications.

## Project Setup
- Clone the repository and navigate to the `react_intro` directory.
- Run `npm install` to install dependencies.
- Use `npm start` to launch the development server.
- Deploy the application to GitHub Pages with `npm run deploy`, which will create a `gh-pages` branch.
- Access the deployed application on [GitHub Pages](https://hayes28.github.io/atlas-web_react/).

## Testing
- Write and run tests using Jest and Enzyme with the command `npm test`.
- The project includes a `setupTests.js` configuration file for Enzyme.

## Structure
- The project is structured into separate folders for each component and utility function.
- Assets like the favicon and the Holberton logo are organized within an assets folder.
- Webpack configuration files are located in the `config` folder.


# React Props Project

This project is a hands-on guide to understanding the core concepts of React components. It outlines how to create functional components, manage and validate props, and demonstrates the use of Fragments and keys for efficient rendering. Key tasks include refactoring a monolithic application into a modular component structure and writing comprehensive tests to ensure the integrity of components.

## Features
- Componentization of application UI into Header, Footer, Login, and Notifications.
- Prop type validation with `prop-types` library.
- Efficient list rendering with keys in the Notifications component.
- Introduction to React Fragments for grouping elements.

## Getting Started
To get a local copy up and running follow these simple steps:
1. Clone the repo
2. Install NPM packages: `npm install`
3. Start the server: `npm start`

## Testing
- Component tests written with Jest and Enzyme to verify rendering and prop handling.
- Use npm test to run tests.
- npm run test

# React Components Project

This project serves as a comprehensive guide to React component lifecycles, event handling, higher-order components (HOCs), and performance optimization techniques. It further delves into testing components using Jest and the React testing library, Enzyme.

## Objectives
- Learn the appropriate use cases for Class components versus functional components.
- Understand and implement lifecycle methods in Class components.
- Handle events within React components.
- Write unit tests for React components and utilize Jest spies to intercept function calls.
- Create and use HOCs to augment component behavior.
- Optimize component rendering with `shouldComponentUpdate` and pure components.

## Project Setup
- Clone the repository and install dependencies with `npm install`.
- Run tests with `npm test` to ensure component integrity.

## Features
- Transformation of functional components into Class components.
- Lifecycle methods such as `componentDidMount` and `componentWillUnmount`.
- Custom `markAsRead` event handler within the Notifications component.
- Unit tests including tests for event handlers and lifecycle methods.
- WithLogging HOC for logging component mount/unmount events.
- Pure components for preventing unnecessary renders.

## Component Structure
- `App`: The main Class component converted from a functional component.
- `Notifications`: Class component with event handling and lifecycle methods.
- `BodySection` and `BodySectionWithMarginBottom`: Components demonstrating containment and specialization.
- `WithLogging`: An HOC for logging component lifecycle events.

## Testing Components
- Tests are written to ensure that components render correctly and respond to events as expected.
- Pure components and performance optimizations are tested to ensure they do not re-render unnecessarily.

# React Inline Styling Project

This project is centered around implementing and understanding inline styling in React applications. It compares the traditional CSS file approach with inline styling and demonstrates the use of CSS-in-JS libraries like Aphrodite. The project encompasses responsive design techniques, conditional styling, and animation within React components.

## Objectives
- Understand the differences between external CSS and inline styling.
- Implement inline styling using Aphrodite, a CSS-in-JS tool.
- Apply conditional styling based on component properties.
- Develop responsive UIs that adapt to different screen sizes.
- Create and integrate animations within React components.

## Project Setup
- Clone the repository and install dependencies using `npm install`.
- Run the project with `npm start` and navigate through the different tasks to see inline styling in action.

## Features
- **Task 0:** Introduction to basic inline styling in React components.
- **Task 1:** Integration of Aphrodite for enhanced inline styling capabilities.
- **Task 2:** Applying conditional styles based on component properties.
- **Task 3:** Implementing responsive design using media queries.
- **Task 4:** Creating animations for UI elements like Notifications.

## Testing
- Tests are written and modified to accommodate the changes in styling approaches.
- Ensure component integrity and styling consistency using Enzyme and Jest.

# React State Management Project

This project delves into the core aspects of state management in React applications. It emphasizes the handling of component states, lifecycle methods, controlled components, form handling, React Hooks, and state testing using Enzyme.

## Objectives
- Understanding the concept and significance of state in React components and containers.
- Managing state changes and executing code in the correct order.
- Exploring the lifecycle of React components.
- Implementing controlled components, particularly in the context of forms.
- Reusing smaller components, maintaining their purity, and lifting their state to principal containers.
- Utilizing React Hooks for state and other React features.
- Testing state changes effectively with Enzyme.

## Tasks Breakdown:
- Adding Local State and Event Handlers: Modifying components to include local state and handle events such as showing and hiding drawers.
- Controlled Components and State Callbacks: Creating forms within components and managing their state, along with implementing state callbacks for dynamic UI changes.
- Using Context for State Management: Implementing a React Context to manage and share state across different components, including context consumers for components like Footer.
- Advanced State Management: Implementing functions like markNotificationAsRead in the App container to manage notifications state and passing this state to child components.
- Introduction to React Hooks: Using React Hooks in CourseListRow for dynamic styling based on user interactions.

## Project Setup
- Clone the repository and install dependencies using npm install.
- Run the project with npm start to see the state management implementations.

## Testing
- Comprehensive tests written to ensure state management is functioning as expected.
- Use npm test to run the test suites, covering state changes and component interactions.

# React Redux action creator+normalizr Project

This project focuses on mastering Redux for state management in React applications, incorporating the Normalizr library for normalizing nested JSON data. It covers the essentials of Redux action creators, async actions, and setting up Redux with React.

## Objectives:
- Understand Normalizr’s purpose and effectively use it for normalizing schemas and nested JSON.
- Grasp core concepts of Redux, including actions, action creators, and async actions.
- Learn to write tests for Redux to ensure robust state management.

## Features:
- Reading and normalizing data from JSON files.
- Creating various entities with schema.Entity and setting up nested schemas.
- Filtering normalized schemas and managing state changes efficiently.
- Implementing Redux action creators for different functionalities like course selection and notifications.
- Setting up async action creators and handling API interactions.
- Binding action creators to simplify action dispatching.

## Structure:
- The project is structured into various tasks, each focusing on a specific aspect of Redux and Normalizr:
    - Task 0: Reading data from JSON and setting up basic state management.
    - Task 1: Normalizing a nested JSON structure.
    - Task 2: Filtering a normalized schema.
    - Task 3: Creating and testing Redux action creators for course management.
    - Task 4: Setting up action creators for UI management.
    - Task 5: Managing notification actions and filters.
    - Task 6: Binding actions for simplified dispatching.
    - Task 7: Implementing async action creators for handling API interactions.

## Testing:
- Comprehensive test suites for each task, focusing on action creators, normalized data, and async actions.
- Utilization of libraries like redux-mock-store and fetch-mock for simulating store behavior and API responses.

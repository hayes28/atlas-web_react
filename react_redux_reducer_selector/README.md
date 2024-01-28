# React Redux Reducer and Selector Project

This project focuses on mastering React Redux reducers and selectors. The project builds upon the React course, introducing advanced state management concepts and techniques, including the use of Immutable.js and Normalizr.

## Resources

- [Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)
- [Selectors](https://redux.js.org/introduction/learning-resources#selectors)
- [Writing tests](https://redux.js.org/usage/writing-tests)
- [Immutable Map documentation](https://immutable-js.com/docs/v4.3.5/)
- [Normalizr](https://github.com/paularmstrong/normalizr)
- [Normalizing State Shape](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)

## Learning Objectives
By the end of this project, you should be able to explain:
- The purpose and role of a reducer within an application.
- The importance of keeping a reducer pure.
- Why mutations should not occur within a reducer.
- The role of Immutable in a reducer.
- The use of Normalizr within the app.
- The concept of selectors and when to use them.

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- Files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x.
- A mandatory `README.md` file at the root of the project folder.
- Push all files, including `package.json` and `.babelrc`.
- All functions must be exported.

## Tasks

### Task 0: Basic Reducer
1. **Create the basic state in `reducers/uiReducer.js`:**
   - Properties: `isNotificationDrawerVisible`, `isUserLoggedIn`, `user`.
2. **Create the reducer function in `reducers/uiReducer.js`:**
   - Import actions from `actions/uiActionTypes`.
   - Define `uiReducer` function with appropriate action handlers.
3. **Write tests in `reducers/uiReducer.test.js`:**
   - Test the initial state with no action passed.
   - Test the initial state with the `SELECT_COURSE` action.
   - Test state changes with the `DISPLAY_NOTIFICATION_DRAWER` action.

### Task 1: Use Immutable for the UI Reducer
1. Install and implement Immutable.js in `uiReducer.js`.
2. Update the reducer function to use `Map` from Immutable.js.
3. Update the test suite to account for Immutable changes.

### Task 2: Create a Reducer for Courses
1. Create a `FETCH_COURSE_SUCCESS` action in `courseActionTypes`.
2. Write a `courseReducer.js` with the default state as an empty array.
3. Handle `FETCH_COURSE_SUCCESS`, `SELECT_COURSE`, and `UNSELECT_COURSE` actions.
4. Write tests in `courseReducer.test.js`.

### Task 3: Create the Reducer for Notifications
1. Create a `FETCH_NOTIFICATIONS_SUCCESS` action in `notificationActionTypes`.
2. Write a `notificationReducer.js` with the default state including `notifications` and `filter`.
3. Handle `FETCH_NOTIFICATIONS_SUCCESS`, `MARK_AS_READ`, and `SET_TYPE_FILTER` actions.
4. Write tests.

### Task 4: Normalizr & Immutable
1. Define schema entities for courses in `schema/courses.js`.
2. Update course and notification reducers to use Normalizr and Immutable.js.
3. Write corresponding tests.

### Task 5: Selectors
1. Create selectors in `src/selectors/notificationSelector.js`:
   - `filterTypeSelected`
   - `getNotifications`
   - `getUnreadNotifications`
2. Write tests in `src/selectors/notificationSelector.test.js`.

## Testing
Ensure all tests pass by running:
```
npm test
```

// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './uiReducer';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    course: courseReducer,
    notification: notificationReducer,
});

export default rootReducer;

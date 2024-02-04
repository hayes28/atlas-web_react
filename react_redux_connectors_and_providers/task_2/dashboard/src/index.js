import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import {thunk} from 'redux-thunk';

// Create Redux store holding the state of your app
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk) // Correctly include thunk
});

const root = ReactDOM.createRoot(document.getElementById("root"));
// Root App
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

// Create Redux store holding the state of your app
const store = configureStore({
  reducer: rootReducer,
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

import uiReducer from "./reducers/uiReducer";
import { configureStore } from "@reduxjs/toolkit";
import trelloReducer from "./reducers/trelloReducer";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    trello: trelloReducer,
  },
});

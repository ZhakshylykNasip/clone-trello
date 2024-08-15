import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { listsReducer } from "./slices/listsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lists: listsReducer,
  },
});

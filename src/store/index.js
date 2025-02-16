import { configureStore } from "@reduxjs/toolkit";
import tabReducer from './slice/tab';

const store = configureStore({
  reducer: {
    tab: tabReducer
  }
});

export default store;
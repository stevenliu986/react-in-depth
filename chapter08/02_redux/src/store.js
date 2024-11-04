import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer.js";

const store = configureStore({
  reducer: {
    thingReducer: dataReducer,
  },
});

export default store;

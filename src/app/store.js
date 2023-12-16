import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "../features/serviceSlice";
import calendarSlice from "../features/calendarSlice";
export const store = configureStore({
  reducer: {
    service: serviceSlice,
    calendar: calendarSlice,
  },
});

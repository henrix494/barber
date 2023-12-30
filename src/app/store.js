import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "../features/serviceSlice";
import calendarSlice from "../features/calendarSlice";
import signInSlice from "../features/signInSlice";
import modelSlice from "../features/modelSlice";
import userDataSlice from "../features/userDataSlice";
export const store = configureStore({
  reducer: {
    service: serviceSlice,
    calendar: calendarSlice,
    signIn: signInSlice,
    model: modelSlice,
    userData: userDataSlice,
  },
});

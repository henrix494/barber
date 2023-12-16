import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  date: "",
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers: {
    setCalendar: (state, action) => {
      state.value = action.payload;
    },
    setData: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setCalendar, setData } = calendarSlice.actions;
export default calendarSlice.reducer;

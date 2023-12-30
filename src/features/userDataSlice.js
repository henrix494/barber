import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDateOfBirth: {
    day: "",
    month: "",
    year: "",
  },
};

const userDataSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    updateDayOfBirth: (state, action) => {
      state.userDateOfBirth.day = action.payload;
    },
    updateMonthOfBirth: (state, action) => {
      state.userDateOfBirth.month = action.payload;
    },
    updateYearOfBirth: (state, action) => {
      state.userDateOfBirth.year = action.payload;
    },
  },
});

export const { updateDayOfBirth, updateMonthOfBirth, updateYearOfBirth } =
  userDataSlice.actions;
export default userDataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const serviceSlice = createSlice({
  name: "service",
  initialState: initialState,
  reducers: {
    setService: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setService } = serviceSlice.actions;
export default serviceSlice.reducer;

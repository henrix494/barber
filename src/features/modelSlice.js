import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModel: false,
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    toggleModel: (state, action) => {
      state.isModel = action.payload;
    },
  },
});

export const { toggleModel } = modelSlice.actions;
export default modelSlice.reducer;

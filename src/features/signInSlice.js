import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
  name: null,
  phoneNumber: null,
  uid: null,
};

export const signInslice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setIsSignIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setUid: (state, action) => {
      state.uid = action.payload;
    },
  },
});

export const { setIsSignIn, setName, setPhoneNumber, setUid } =
  signInslice.actions;
export default signInslice.reducer;

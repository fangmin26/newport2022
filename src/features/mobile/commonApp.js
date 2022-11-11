import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navActive: "intro",
  // allowkey true면 backend 켜기, false면 front만
  allowkey:false
};

const commonApp = createSlice({
  name: "commonApp",
  initialState: initialState,
  reducers: {
    toggleNavigation: (state,action) => {
      state.navActive = action.payload
    },
  }
});
export const { toggleNavigation } = commonApp.actions;

export default commonApp.reducer;
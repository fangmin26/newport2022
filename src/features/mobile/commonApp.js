import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navActive: "intro",
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
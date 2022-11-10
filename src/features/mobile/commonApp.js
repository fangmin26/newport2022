import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navActive: false,
};

const commonApp = createSlice({
  name: "commonApp",
  initialState: initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.navActive = !state.navActive;
    },

  }
});
export const { toggleNavigation } = commonApp.actions;

export default commonApp.reducer;
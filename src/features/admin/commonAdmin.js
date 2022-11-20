import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideTitle: "",
  sideSubtitle: "",
  scrollAction: false,
  clickedPage: 1,
  // allowkey true면 backend 켜기, false면 front만
  allowkey: false,
};

const commonAdmin = createSlice({
  name: "commonAdmin",
  initialState: initialState,
  reducers: {
    startScroll: (state, action) => {
      state.scrollAction = action.payload;
    },
    adminSideTitle: (state, action) => {
      state.sideTitle = action.payload;
    },
    adminSideSubTitle: (state, action) => {
      state.sideSubtitle = action.payload;
    },
    handleClickPage: (state, action) => {
      state.clickedPage = action.payload;
    },
  },
});
export const {
  startScroll,
  adminSideTitle,
  adminSideSubTitle,
  handleClickPage,
} = commonAdmin.actions;

export default commonAdmin.reducer;

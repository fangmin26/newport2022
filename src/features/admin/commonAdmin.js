import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideToggle: false,
  sideTitle:"",
  sideSubtitle:"",
  // allowkey true면 backend 켜기, false면 front만
  allowkey:false
};

const commonAdmin = createSlice({
  name: "commonAdmin",
  initialState: initialState,
  reducers: {
    adminSideToggle: (state,action) => {
      state.sideToggle = action.payload
    },
    adminSideTitle:(state,action)=>{
      state.sideTitle = action.payload
    },
    adminSideSubTitle:(state,action)=>{
      state.sideSubtitle = action.payload
    },
  }
});
export const { toggleNavigation,adminSideTitle,adminSideSubTitle } = commonAdmin.actions;

export default commonAdmin.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstLabel: "개발언어",
  secondLabel: "개발",
};

const toyprjAdmin = createSlice({
  name: "toyprjAdmin",
  initialState: initialState,
  reducers: {
    changeFirstLb: (state, action) => {
      state.firstLabel = action.payload;
    },
    changeSecondLb: (state, action) => {
      state.secondLabel = action.payload;
    },
  },
});
export const { changeFirstLb, changeSecondLb } = toyprjAdmin.actions;

export default toyprjAdmin.reducer;

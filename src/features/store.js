import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//mobile
import commonApp from "./mobile/commonApp";
//admin


const reducers = combineReducers({
  //app
  commonApp: commonApp,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["commonApp",],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authenticationReducer from "./slices/authSlide";
const rootReducer =  combineReducers({
    authentication: authenticationReducer,
})
const store = configureStore({
    reducer:rootReducer,
});
export default store;

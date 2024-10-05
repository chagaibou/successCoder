import { configureStore } from "@reduxjs/toolkit";
import reducerCourses from "./reducers/reducerCourses";
import { combineReducers } from "redux";
import reducerCart from "./reducers/reducercart";
import reducerPayment from "./reducers/reducerPayment";

const rootReducer = combineReducers({
  courses: reducerCourses,
  cart: reducerCart,
  payments: reducerPayment,
});
const store = configureStore({ reducer: rootReducer });

export default store;

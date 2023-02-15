import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import requestsReducer from "./slices/requestSlice";
import feedDataReducer from "./slices/feedDataSlice";
const reducer = combineReducers({
  requestsState: requestsReducer,
  feedDataState: feedDataReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;

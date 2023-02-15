import axios from "axios";
import {
  getfeedData,
  getSuccess,
  postfeeddata,
  postfeeddataSuccess,
  postfeeddataFail,
} from "../slices/feedDataSlice";

export const getfeedDatas = (data) => (dispatch) => {
  try {
    dispatch(getfeedData());
    dispatch(getSuccess(data));
  } catch (error) {
    //handle error
  }
};

export const postFeedDatas = (requestInputs) => async (dispatch) => {
  try {
    dispatch(postfeeddata());

    dispatch(postfeeddataSuccess(requestInputs));
  } catch (error) {
    //handle error
  }
};

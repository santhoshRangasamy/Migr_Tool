import axios from "axios";
import {
  postRequest,
  postSuccess,
  postFail,
  getRequest,
  getSuccess,
  getFail,
  updateRequest,
  updateSuccess,
  updateFail,
} from "../slices/requestSlice";

export const getRequests = async (dispatch) => {
  try {
    dispatch(getRequest());
    let data = "Santhosh";
    console.log("Hi");
    // const { data } = await axios.get("/api/v1/requests");
    dispatch(getSuccess(data));
  } catch (error) {
    //handle error
    dispatch(getFail(error.response.data.message));
  }
};

export const postrequest = (requestInputs) => async (dispatch) => {
  try {
    dispatch(postRequest());
    const { data } = await axios.post(`/api/v1/request/new`, requestInputs);
    dispatch(postSuccess(data));
  } catch (error) {
    dispatch(postFail(error.response.data.message));
  }
};

export const updaterequest = (payload) => async (dispatch) => {
  try {
    dispatch(updateRequest());
    const { data } = await axios.put(`/api/v1/request/update`, payload);
    dispatch(updateSuccess(data));
  } catch (error) {
    dispatch(updateFail(error));
  }
};

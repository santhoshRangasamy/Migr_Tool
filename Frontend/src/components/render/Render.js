import React, { useState, createContext } from "react";
import "./render.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Widget from "../widget/Widget";
import Button from "@mui/material/Button";
import { Progress, Space } from "antd";
import { getfeedDatas } from "../../actions/feedDataAction";
import { useDispatch, useSelector } from "react-redux";
import {
  postrequest,
  getRequests,
  updaterequest,
} from "../../actions/requestsAction";

var XLSX = require("xlsx");

const Render = () => {
  const dispatch = useDispatch();
  const { loading, feedData } = useSelector((state) => state.feedDataState);
  const { requests } = useSelector((state) => state.requestsState);
  const [records, setRecords] = useState(0);
  const [req, setReq] = useState([]);
  const [render, setRender] = useState(true);
  const [remainingData, setRemainingData] = useState("");
  const [progressPercentage, setProgressPercentage] = useState(0);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsondata = XLSX.utils.sheet_to_json(worksheet);
    setRecords(jsondata.length);

    let required = { ResponseCode: 0, ResponseData: "", ResponseStatus: "" };

    let payload = {
      UserName: "Santhosh.kumar@trikatechnologies.com",
      Platform: "Vtex",
      Account: "Trika",
      Parameter: "Post_Request",
      RequestInputs: [],
    };

    for (let i = 0; i < jsondata.length; i++) {
      let reqPayload = { ...jsondata[i] };
      let obj = { RefId: reqPayload.RefId, Payload: reqPayload, ...required };
      delete obj.Payload.RefId;

      payload.RequestInputs.push(obj);
    }

    dispatch(postrequest(payload));
    setRender(false);
  };

  const handleRender = async () => {
    let collectionId = requests.request._id;
    let requestArray = requests.request.RequestInputs;
    console.log(requestArray);
    let array = [];
    let status = "";

    for (let i = 0; i < requestArray.length; i++) {
      let updatePayload = {};
      array = [...array, requestArray[i]];
      // array.push(requestArray[i]);
      // console.log(array);
      if (requestArray[i].RefId % 3 == 0) {
        status = "exception";
      } else {
        status = "success";
      }

      updatePayload.id = collectionId;
      updatePayload.refId = requestArray[i].RefId;
      updatePayload.status = status;

      console.log(updatePayload);
      dispatch(updaterequest(updatePayload));

      // dispatch(getfeedDatas(array));
      // dispatch(getfeedDatas());

      // setRemainingData(records - array.length);
      // setProgressPercentage(Math.floor((array.length / records) * 100));
    }
    await Promise.allSettled(handleRender);
  };

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Request</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <hr />
      <div className="upload">
        <p>Import Excel File Here</p>
        <Button variant="outlined" component="label" className="uploadButton">
          Import
          <input
            hidden
            accept="xlsx/*"
            multiple
            type="file"
            onChange={(e) => handleFile(e)}
          />
        </Button>
      </div>
      <hr />
      <div className="bottom">
        <p>Request Render Information</p>
        <div>
          <Progress type="circle" percent={progressPercentage} />
        </div>

        <Button
          disabled={render}
          onClick={handleRender}
          variant="contained"
          size="small"
        >
          Start Render
        </Button>

        <p className="amount">{records}</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Remaining</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">{remainingData}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Success</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Fail</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Render;

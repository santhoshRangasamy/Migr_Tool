import React from "react";
import "./render.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Widget from "../widget/Widget";
import Button from "@mui/material/Button";

const Render = () => {
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
          <input hidden accept="xlsx/*" multiple type="file" />
        </Button>
      </div>
      <hr />
      <div className="bottom">
        <p>Request Render Information</p>
        <div className="featuredChart">
          <CircularProgressbar value={0} text={"0%"} strokeWidth={5} />
        </div>

        <Button variant="contained" size="small" color="success">
          Start Render
        </Button>
        <p className="amount">$420</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
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

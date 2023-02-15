import React from "react";
import { useState } from "react";
import "./response.scss";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Divider, Radio, Space, Progress, Tag, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

let response = { RefId: "", Response: "" };
const Response = () => {
  let test = `{
    errors: [
      {
        code: "gateway.scopes.authorise",
        title: "Unauthorised call",
        detail:
          "Your current grant type does not have the required permissions to fulfill this request",
      },
    ],
  }
`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, feedData } = useSelector((state) => state.feedDataState);
  const request = feedData;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const shoot = (y) => {
    console.log(response);
    showModal();
  };

  return (
    <div className="chart">
      <div className="top">
        <div className="title">Response</div>
        <div className="progressbar">
          {request.map((props, i) => (
            <div key={i} className="progress">
              <Progress
                type="circle"
                percent={100}
                width={28}
                status={props.ResponseStatus}
                onClick={() => {
                  let y = { ...props };
                  response = y;
                  shoot(y);
                }}
              />
              <div>{props.RefId} </div>
            </div>
          ))}
        </div>
        <div>
          <Modal
            className="scrollable-container"
            title="Request & Response"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              {" "}
              <b>RefId : {response.RefId}</b>
            </p>
            <p>
              <b>Response : {response.Response}</b>
            </p>
            <SyntaxHighlighter language="javascript" style={docco}>
              {test}
            </SyntaxHighlighter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Response;

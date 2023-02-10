import React from "react";
import { useState } from "react";
import "./response.scss";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Divider, Radio, Space, Progress, Tag } from "antd";

import Table from "react-bootstrap/Table";

import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

let pageNumber = 1;

const data = [
  { data: { RefId: 205, Response: true } },
  { data: { RefId: 206, Response: false } },
  { data: { RefId: 207, Response: true } },
  { data: { RefId: 208, Response: false } },
  { data: { RefId: 209, Response: true } },
  { data: { RefId: 205, Response: true } },
  { data: { RefId: 206, Response: false } },
  { data: { RefId: 207, Response: true } },
  { data: { RefId: 208, Response: false } },
  { data: { RefId: 209, Response: true } },
  { data: { RefId: 205, Response: true } },
  { data: { RefId: 206, Response: false } },
  { data: { RefId: 207, Response: true } },
  { data: { RefId: 208, Response: false } },
  { data: { RefId: 209, Response: true } },
];

const Response = ({ title }) => {
  const shoot = (y) => {
    console.log(y);
  };
  let x = 100;
  let i = 205;
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <div className="progress">
      <tr className="test-td">
                <td>...</td>
              </tr>
        {data.map((item) => {
          return (
            <div className="progressbar">
              <Progress
                type="circle"
                percent={100}
                width={28}
                onClick={() => {
                  let y = { item };
                  shoot(y, i++);
                }}
              />
              <div>
                {() => {
                  item;
                }}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Response;

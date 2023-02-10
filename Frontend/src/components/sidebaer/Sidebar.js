import React from "react";
import "./sidebar.scss";
import LastPageIcon from "@mui/icons-material/LastPage";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">MIGR</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <LastPageIcon  className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <li>
            <LastPageIcon className="icon" />
            <span>Users</span>
          </li>

          <li>
            <LastPageIcon className="icon" />
            <span>Products</span>
          </li>

          <li>
            <LastPageIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LastPageIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <LastPageIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <LastPageIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <LastPageIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <LastPageIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <LastPageIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <LastPageIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LastPageIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;

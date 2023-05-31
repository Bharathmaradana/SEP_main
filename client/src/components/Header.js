import React from "react";
import { IoNotifications } from "react-icons/io5";
import { FcSupport } from "react-icons/fc";
import { BiSupport } from "react-icons/bi";
import "./Header.css";
import a from "./assests/icons8-notification-48.png";
import b from "./assests/b.png";
import c from "./assests/c.png";
function Header({ title }) {
  return (
    <div className="header_main">
      <header>
        <div className="header_1">
          <div>
            <h1>{title}</h1>
          </div>
          <div className="header_2">
            <div>
              <img src={a} style={{ height: "25px", width: "25px" }} />
              <p style={{ marginTop: "-5px" }}>Notification</p>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <img src={b} style={{ height: "25px", width: "25px" }} />
              <p style={{ marginTop: "-5px" }}>Settings</p>
            </div>
            <div>
              <img src={c} style={{ height: "25px", width: "25px" }} />
              <p style={{ marginTop: "-5px" }}>Support</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

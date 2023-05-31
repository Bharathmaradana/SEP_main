import React, { useState, useEffect } from "react";
import "./App.css";
import { FaUserAlt } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Alerts from "./components/Alerts";
import axios from "axios";
import d from "./components/assests/d.gif";
import e from "./components/assests/e.png";
import f from "./components/assests/f.png";
import g from "./components/assests/g.png";

function App() {
  const [selectedItem, setSelectedItem] = useState("Home");

  useEffect(() => {
    const storedItem = localStorage.getItem("selectedItem");
    if (storedItem) {
      setSelectedItem(storedItem);
    }
  }, []);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    localStorage.setItem("selectedItem", item);
  };
  return (
    <div className="App some">
      {" "}
      <div className="dashboard">
        <div className="sidebar">
          <div
            className="sidebar_1"
            style={{
              padding: "20px",

              backgroundColor: "#ffffff",
              height: "90vh",
              borderRadius: "20px",
            }}
          >
            <ul>
              <div className="username" style={{ marginTop: "-3rem" }}>
                <FaUserAlt className="username_1" />
                <h1>ADMIN</h1>
              </div>
              <li
                onClick={() => handleItemClick("Home")}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2rem",
                }}
              >
                <img
                  src={d}
                  style={{ height: "30px", width: "30px", marginLeft: "40px" }}
                />
                <p style={{ marginLeft: "5px" }}>Home</p>
              </li>
              <li
                onClick={() => handleItemClick("Analytics")}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "-0.5rem",
                }}
              >
                <img
                  src={e}
                  style={{ height: "30px", width: "30px", marginLeft: "40px" }}
                />
                <p style={{ marginLeft: "5px" }}>Analytics</p>
              </li>
              <li
                onClick={() => handleItemClick("Alerts")}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "-0.5rem",
                }}
              >
                <img
                  src={f}
                  style={{ height: "30px", width: "30px", marginLeft: "40px" }}
                />
                <p style={{ marginLeft: "5px" }}> Alerts</p>
              </li>
              <div
                className="logout_1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={g}
                  style={{ height: "30px", width: "30px", marginLeft: "40px" }}
                />
                <p style={{ marginLeft: "5px" }}> Logout</p>
              </div>
            </ul>
          </div>
        </div>
        <div className="content">
          {selectedItem === "Home" && <Home />}
          {selectedItem === "Analytics" && <Analytics />}
          {selectedItem === "Alerts" && <Alerts />}
        </div>
      </div>
    </div>
  );
}

export default App;

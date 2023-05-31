import React, { useState, useEffect } from "react";
import Header from "./Header";
import Barchart from "./Charts/Barchart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Linechart from "./Charts/Linechart";
import axios from "axios";
import PieChart from "./Charts/PieCharts";
import PieCharts from "./Charts/PieCharts";

function Analytics() {
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleButtonClick = () => {
    setShowCalendar(true);
  };

  const handleDateSelect = (date) => {
    setStartDate(date);
    setShowCalendar(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [dataset, setdataset] = useState("");
  // useEffect(() => {
  //   axios.get("http://localhost:5006/api/").then((data) => {
  //     console.log(data.data[1]);
  //     setdataset(data.data[1]);
  //   });
  // }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: "#eff3f8" }} className="some">
      <header>
        <Header title="PEDAL ASSEMBLY" />
        <div className="underline"></div>
      </header>
      <div className="anay">
        <div className="anay_1">
          <img src="" style={{ height: "40px", width: "40px" }} />
          <p>PEDAL ASSEMBLY</p>
        </div>
        <header>
          {" "}
          <div className="underline"></div>
        </header>
      </div>
      {/* <div>
        <div className="anay_2">
          <div className="anay_3">
            <div className="anay_4">
              <p>Overview</p>
            </div>
            <div
              className="anay_4"
              style={{ backgroundColor: "rgb(211, 215, 215)" }}
            >
              <p>Reports</p>
            </div>
          </div>
          <div className="anay_5">
            <div className="dropdown" style={{ borderRadius: "10px" }}>
              <button
                className="dropbtn"
                onClick={toggleDropdown}
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  borderRadius: "10px",
                }}
              > */}
      {/* VENDOR NAME
                <i className={`fa fa-caret-${isOpen ? "up" : "down"}`}></i>
              </button>
              {isOpen && (
                <div className="dropdown-content">
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                  <a href="#">Option 3</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
      {/* <header style={{ marginTop: "15px" }}>
        {" "}
        <div className="underline"></div>
      </header> */}
      <div className="anay_6">
        <div className="">
          {/* <button onClick={handleButtonClick}>Select Start Date</button>
          {showCalendar && (
            <DatePicker selected={startDate} onChange={handleDateSelect} />
          )} */}
          <a className="btn" style={{ fontSize: "1.4rem" }}>
            Start Date
          </a>
        </div>
        <div className="" style={{ marginLeft: "2rem" }}>
          <a className="btn" style={{ fontSize: "1.4rem" }}>
            End Date
          </a>
        </div>
      </div>
      <div
        className="any_8"
        style={{ display: "flex", flexDirection: "row", marginTop: "3%" }}
      >
        <div
          className="any_9"
          style={{
            width: "40%",
            border: "1px solid white",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
          }}
        >
          <Barchart />
        </div>
        <div
          className="any_10"
          style={{
            width: "45%",
            border: "1px solid white",
            marginLeft: "5%",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
          }}
        >
          <PieCharts />
        </div>
      </div>
    </div>
  );
}

export default Analytics;

// const timestamp = 1684851000.3583002;
// const dateObj = new Date(timestamp * 1000);
// const timeString = dateObj.toLocaleTimeString([], {
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
// });

// console.log(timeString);

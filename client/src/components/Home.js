import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Header.css";
import axios from "axios";
function Home({ data_1 }) {
  const [data, setdata] = useState([]);
  const [dataset, setdataset] = useState("");
  // useEffect(() => {
  //   axios.get("http://localhost:5006/api/").then((data) => {
  //     console.log(data.data[1]);
  //     setdataset(data.data[1]);
  //   });
  // }, []);
  const [date, setdate] = useState("29-05-2023");
  return (
    <div>
      <header>
        <Header title="Home" />
        <div className="underline"></div>
      </header>
      <div className="home">
        <div className="home_1">
          <div className="home_2">
            <h3>Reported Incidents -{dataset ? dataset.date : null}</h3>
            <div className="home_3">
              <p>1</p>
              <p style={{ fontSize: "20px", fontWeight: "400" }}>
                Ratchet Assembly
              </p>
              <p style={{ fontWeight: "800" }}>0</p>
            </div>
            <div className="home_3">
              <p>2</p>
              <p style={{ fontSize: "20px", fontWeight: "400" }}>
                Brake Pedal Assembly
              </p>
              <p style={{ fontWeight: "800" }}>05</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

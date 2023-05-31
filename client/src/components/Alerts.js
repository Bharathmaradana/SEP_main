import React, { useEffect, useState } from "react";
import Header from "./Header";
import DataTable from "react-data-table-component";
import "./Header.css";
import { CSVLink } from "react-csv";
import downloadgif from "./assests/k.gif";
import axios from "axios";
import DatePicker from "react-date-picker";

function Alerts() {
  const [data_1, setdata_1] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5006/api/").then((obj) => {
      if (obj.data) {
        setdata_1(obj.data);

        console.log(data_1);
      }
    });
  }, []);
  function UnixTimestampConversion(encodedtimestamp) {
    const unixTimestamp = encodedtimestamp;
    const dateObj = new Date(unixTimestamp * 1000);
    const formattedDate = dateObj.toDateString();
    const formattedTime = dateObj.toTimeString().slice(0, 8);

    return formattedTime;
  }
  const data = [
    {
      id: 1,
      start_timestamp: 123,
      end_timestamp: 123,
      status: "incompleted",
      steps_done: 30,
      images: "",
    },
    {
      id: 2,
      start_timestamp: 123,
      end_timestamp: 123,
      status: "completed",
      steps_done: 25,
      images: "",
    },
    {
      id: 3,
      start_timestamp: 123,
      end_timestamp: 123,
      status: "completed",
      steps_done: 40,
      images: "",
    },
  ];

  const columns = [
    { name: "sno", selector: (_, index) => index + 1 },
    { name: "id", selector: "_id" },
    { name: "start_timestamp", selector: "start_timestamp", sortable: true },
    { name: "end_timestamp", selector: "end_timestamp" },
    { name: "status", selector: "status" },
    { name: "steps_done", selector: "steps_done", sortable: true },
    { name: "images", selector: "images" },
  ];

  const csvData = data_1.map(async (item, index) => ({
    ...item,
    sno: index + 1,
    id: item._id,
    start_timestamp: UnixTimestampConversion(item.start_timestamp),
    end_timestamp: UnixTimestampConversion(item.end_timestamp),
    status: item.status,
    steps_done: item.steps_done,
    images: item.images,
  }));
  const csvHeaders = columns.map((column) => ({
    label: column.name,
    key: column.name,
    format: (row) => row[column.selector],
  }));

  return (
    <div>
      <header>
        <Header title="Alerts" />
        <div className="underline"></div>
      </header>
      <div
        className="alert_1"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <div className="alert_2">
          <input type="date" className="datepicker" value="2023-05-30" />
        </div>
        <div className="alert_3">
          <CSVLink
            data={csvData}
            headers={csvHeaders}
            filename={"your_data.csv"}
          >
            <img
              src={downloadgif}
              style={{
                height: "40px",
                width: "40px",
                marginRight: "15rem",
                marginTop: "1.5rem",
              }}
            />
          </CSVLink>
        </div>
      </div>

      <DataTable columns={columns} data={data_1} />
    </div>
  );
}

export default Alerts;

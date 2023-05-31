import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const data = [
  { time: "00:00", line1: 10, line2: 20, line3: 15 },
  { time: "01:00", line1: 15, line2: 25, line3: 18 },
  { time: "02:00", line1: 20, line2: 30, line3: 25 },

  // Add more data points here
];

const Linechart = () => {
  return (
    <LineChart width={400} height={300} data={data}>
      <CartesianGrid stroke="#ffffff" strokeDasharray="0" />
      <XAxis dataKey="time" />
      <YAxis />

      <Line type="monotone" dataKey="line1" stroke="#8884d8" />
      <Line type="monotone" dataKey="line2" stroke="#82ca9d" />
      <Line type="monotone" dataKey="line3" stroke="#ffc658" />
    </LineChart>
  );
};

export default Linechart;

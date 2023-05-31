import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineGraph = () => {
  const generateRandomData = () => {
    const data = [];

    // Generate random data
    for (let i = 0; i < 15; i++) {
      const randomValue = Math.floor(Math.random() * 100);
      data.push({ time: `${i}`, value: randomValue });
    }

    return data;
  };

  const data = generateRandomData();

  return (
    <LineChart
      width={370}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      <CartesianGrid stroke="#ffffff" strokeDasharray="0" />
      <XAxis dataKey="time" />
      <YAxis domain={[0, "dataMax + 10"]} />
      <Tooltip />

      <Line type="monotone" dataKey="value" stroke="#8b0000" />
    </LineChart>
  );
};

export default LineGraph;

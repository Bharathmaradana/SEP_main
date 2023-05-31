import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "A", value: 30 },
  { name: "B", value: 50 },
  { name: "C", value: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const PieCharts = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <PieChart width={300} height={300} style={{ marginLeft: "7rem" }}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={
              index === activeIndex ? COLORS[index % COLORS.length] : COLORS[0]
            }
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieCharts;

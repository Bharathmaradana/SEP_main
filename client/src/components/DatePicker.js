import React, { useState } from "react";


const DatePicker = () => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(i);
    }
    return options;
  };

  return (
    <div className="date-picker">
      <h2>Date Picker</h2>
      <label>
        Date:
        <select className="select" value={date} onChange={handleDateChange}>
          <option value="">--Select Date--</option>
          {generateOptions(1, 31).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </label>
      <label>
        Month:
        <select className="select" value={month} onChange={handleMonthChange}>
          <option value="">--Select Month--</option>
          {generateOptions(1, 12).map((month) => (
            <option key={month} value={month}>
              {new Date(0, month - 1).toLocaleString("default", {
                month: "long",
              })}
            </option>
          ))}
        </select>
      </label>
      <label>
        Year:
        <select className="select" value={year} onChange={handleYearChange}>
          <option value="">--Select Year--</option>
          {generateOptions(2023, 2013).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <h3>Selected Date: {`${date}/${month}/${year}`}</h3>
    </div>
  );
};

export default DatePicker;

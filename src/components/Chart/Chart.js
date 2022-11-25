import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  
  const vals = props.dataPoints.map(dat=>dat.value);
  const totalMax = Math.max(...vals);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dat) => (
        <ChartBar
          key={dat.label}
          maxVal={totalMax}
          value={dat.value}
          label={dat.label}
        />
      ))}
    </div>
  );
};

export default Chart;

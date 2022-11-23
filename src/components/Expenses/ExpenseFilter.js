import React from "react";
import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h4>Filter By year</h4>
      <select
        className="expense-filter-select"
        onChange={(e) => {
          props.filterByYear(e.target.value);
        }}>
        <option value="2022">2022</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;

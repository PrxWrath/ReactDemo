import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filtered = props.expenses.filter((val) => {
    return val.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter filterByYear={setFilterYear} />
      <ExpenseChart expenses = {filtered}/>
      <ExpenseList items = {filtered}/>
    </Card>
  );
};

export default Expenses;

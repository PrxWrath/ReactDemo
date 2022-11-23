import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filtered = props.expenses.filter((val) => {
    return val.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter filterByYear={setFilterYear} />
      <ExpenseList items = {filtered}/>
    </Card>
  );
};

export default Expenses;

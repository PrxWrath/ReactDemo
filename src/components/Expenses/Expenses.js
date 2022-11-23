import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filtered = props.expenses.filter((val) => {
    return val.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter filterByYear={setFilterYear} />
      {filtered.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expenseTitle={expense.title}
            expensePrice={expense.amount}
            expenseDate={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;

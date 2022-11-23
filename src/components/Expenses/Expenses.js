import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
      <Card className = 'expenses'>
        {props.expenses.map((expense) => {
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
}

export default Expenses;

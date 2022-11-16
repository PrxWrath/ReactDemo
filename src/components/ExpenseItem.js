import React from "react";
import "./ExpenseItem.css";
export default function ExpenseItem() {
  
    const expenseTitle = 'Groceries';
    const expensePrice = 'Rs.250';
    let date = new Date();
    const expenseDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    const LocationOfExpenditure = 'ABC General Store';
  return (
    <>
      <h3>Expense Items:</h3>
      <div className="expense-item">
        <div className="expense-item__details">{expenseDate}</div>
        <div className="expense-item__desc">
          <h4>{expenseTitle}</h4>
          <div className="expense-item__details">Spent At: {LocationOfExpenditure}</div>
          <div className="expense-item__price">{expensePrice}</div>
        </div>
      </div>
    </>
  );
}

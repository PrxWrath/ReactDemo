import React from "react";
import "./ExpenseItem.css";
export default function ExpenseItem(props) {
  
  return (
    <>
      <div className="expense-item">
        <div className="expense-item__details">{props.expenseDate}</div>
        <div className="expense-item__desc">
          <h4>{props.expenseTitle}</h4>
          <div className="expense-item__details">Spent At: {props.LocationOfExpenditure}</div>
          <div className="expense-item__price">Rs. {props.expensePrice}</div>
        </div>
      </div>
    </>
  );
}

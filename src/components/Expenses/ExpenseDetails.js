import React from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  return (
    <div className="expense-details">
      <h4>{props.title}</h4>
      <div className="expense-details__loc">Spent At: {props.location}</div>
      <div className="expense-details__price">Rs. {props.amount}</div>
    </div>
  );
};

export default ExpenseDetails;

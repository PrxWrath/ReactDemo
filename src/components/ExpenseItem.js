import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

export default function ExpenseItem(props) {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.expenseDate} />
        <ExpenseDetails
          amount={props.expensePrice}
          title={props.expenseTitle}
          location={props.LocationOfExpenditure}
        />
      </div>
    </>
  );
}

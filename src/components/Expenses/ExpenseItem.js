import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  function deleteHandler() {
    const item = document.getElementById(props.expenseTitle);
    item.style.display = "none";
  }
  return (
    <div id = {props.expenseTitle}>
      <Card className="expense-item">
        <ExpenseDate date={props.expenseDate} />
        <ExpenseDetails
          amount={props.expensePrice}
          title={props.expenseTitle}
          location={props.LocationOfExpenditure}
        />
        <button onClick={deleteHandler} className="del-btn">
          Delete
        </button>
      </Card>
    </div>
  );
};

export default ExpenseItem;

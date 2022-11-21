import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [price, setPrice] = useState(props.expensePrice);
  
  function deleteHandler() {
    const item = document.getElementById(props.expenseTitle);
    item.style.display = "none";
  }
  return (
    <div id={props.expenseTitle}>
      <Card className="expense-item">
        <ExpenseDate date={props.expenseDate} />
        <ExpenseDetails
          amount={price}
          title={props.expenseTitle}
          location={props.LocationOfExpenditure}
        />

        <button
          onClick={() => {
            setPrice(100);
          }}
          className="s-btn"
        >
          Change Price
        </button>

        <button onClick={deleteHandler} className="del-btn">
          Delete
        </button>
      </Card>
    </div>
  );
};

export default ExpenseItem;

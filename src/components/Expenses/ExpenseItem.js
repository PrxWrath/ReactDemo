import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.expenseDate} />
        <ExpenseDetails
          amount={props.expensePrice}
          title={props.expenseTitle}
          location={props.LocationOfExpenditure}
        />
      </Card>
  )
}

export default ExpenseItem


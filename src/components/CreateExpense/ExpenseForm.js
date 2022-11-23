import React from "react";
import "./ExpenseForm.css";
import Card from "../UI/Card";
import FormContent from "./FormContent";

const ExpenseForm = (props) => {

  return (
    <Card className="expense-form-bg">
      <FormContent addExpense = {props.addExpense}/>
    </Card>
  );
};

export default ExpenseForm;

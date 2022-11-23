import React, {useState} from "react";

const FormContent = (props) => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");
  const [displayForm, setDisplayForm] = useState(false);

  

  function TitleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  }

  function AmtChangeHandler(e) {
    setEnteredAmount(e.target.value);
  }

  function DateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const expense = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: parseInt(enteredAmount),
      date: new Date(enteredDate),
    };

    props.addExpense(expense);
    setEnteredAmount(0);
    setEnteredTitle("");
    setEnteredDate("");
  }

  if (!displayForm) {
    return (
      <div>
        <button onClick={()=>{setDisplayForm(true)}} className="expense-form-btn">
          + Add Expense
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3>Add Expense</h3>
      <form onSubmit={submitHandler} className="expense-form">
        <label>Expense Title: </label>
        <input onChange={TitleChangeHandler} type="text" value={enteredTitle} placeholder="Expense title"/>
        <label>Expense Amount: </label>
        <input onChange={AmtChangeHandler} value={enteredAmount} type="number" step="0.5"/>
        <label>Expense Date: </label>
        <input onChange={DateChangeHandler} value={enteredDate} type="date"/>

        <button type="submit" className="expense-form-btn">
          + Add Expense
        </button>
        <button onClick={() => {setDisplayForm(false);}} className="expense-form-btn">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FormContent;

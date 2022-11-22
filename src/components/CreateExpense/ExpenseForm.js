import React, { useState } from 'react'
import './ExpenseForm.css'
import Card from '../UI/Card'

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0.5);
  const [enteredDate, setEnteredDate] = useState('');

  function TitleChangeHandler(e){
    setEnteredTitle(e.target.value);
  }

  function AmtChangeHandler(e){
    setEnteredAmount(e.target.value);
  }
  
  function DateChangeHandler(e){
    setEnteredDate(e.target.value);
  }

  function submitHandler(e){
    
    e.preventDefault();

    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expense);

  }
  return (
    <Card className='expense-form-bg'>
        <h3>Add Expense</h3>
        <form onSubmit={submitHandler} className='expense-form'>
            <label>Expense Title: </label>
            <input onChange={TitleChangeHandler} type='text' placeholder='Expense title'/>
            <label>Expense Amount: </label>
            <input onChange={AmtChangeHandler} type='number' step='0.5'/>
            <label>Expense Date: </label>
            <input onChange={DateChangeHandler} type='date'/>
            <button type='submit' className='expense-form-btn'>+ Add Expense</button>
        </form>
    </Card>
  )
}

export default ExpenseForm
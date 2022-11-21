import React from 'react'
import './ExpenseForm.css'
import Card from '../UI/Card'

const ExpenseForm = () => {
  function changeHandler(e){
    console.log(e.target.value);
  }
  return (
    <Card className='expense-form-bg'>
        <h3>Add Expense</h3>
        <form className='expense-form'>
            <label>Expense Title: </label>
            <input onChange={(e)=>changeHandler(e)} type='text' placeholder='Expense title'/>
            <label>Expense Amount: </label>
            <input onChange={(e)=>changeHandler(e)} type='number' step='0.5'/>
            <label>Expense Date: </label>
            <input onChange={(e)=>changeHandler(e)} type='date'/>
            <button className='expense-form-btn'>Submit</button>
        </form>
    </Card>
  )
}

export default ExpenseForm
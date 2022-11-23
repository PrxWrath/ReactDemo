import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

if(props.items.length === 0){
    return <p className='expense-list__fallback'>No expenses found!</p>
}

return (
    <ul className='expense-list'>
       {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expenseTitle={expense.title}
            expensePrice={expense.amount}
            expenseDate={expense.date}
          />
        );
      })} 
    </ul>
  )
}

export default ExpenseList
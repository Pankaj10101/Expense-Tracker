import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpensesList = (props) => {
    if(props.item.length===0) {
        return <h2 className='expenses-list__fallback'>No item Found</h2>
    }
    return (
    <ul className='expenses-list'>
      {props.item.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList
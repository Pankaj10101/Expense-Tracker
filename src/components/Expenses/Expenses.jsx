import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
const Expenses = (props) => {
    const items = props.items
  return (
    <Card className='expenses'>
{    items.map((e)=>{
        return <ExpenseItem  key={e.id} title ={e.title} amount= {e.anount} date ={e.date}
/>
    })}
    </Card>
  )
}

export default Expenses
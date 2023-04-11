import React, {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
   const [input, setIput] =  useState({title:"", Amount:"", date:""})
    function changeInput(e){
        console.log(e.target.value)
    }
  return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input onChange={changeInput} type='text'/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input onChange={changeInput} type='number' min="0.01" step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input onChange={changeInput} type='date' min='2020-01-01' max= '2023-12-31'/>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm
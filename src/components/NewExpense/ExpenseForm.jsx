import React, {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
   const [enteredtitle , setEnteredTitle] =  useState("")
   const [enteredAmount , setEnteredAmount] =  useState("")
   const [enteredDate , setEnteredDate] =  useState("")

   function changetitle(e){
    setEnteredTitle(e.target.value)
   }
   function changeamount(e){
    setEnteredAmount(e.target.value)
   }
   function changedate(e){
    setEnteredDate(e.target.value)
   }

   function submitForm(e){
    e.preventDefault();

    const data = {
        title : enteredtitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    }
    console.log(data)
   }


  return (
    <form onSubmit={submitForm}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input onChange={changetitle} type='text'/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input onChange={changeamount} type='number' min="0.01" step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input onChange={changedate} type='date' min='2020-01-01' max= '2023-12-31'/>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm
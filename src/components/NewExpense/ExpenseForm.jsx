import React, {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

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
    props.onSaveExpenseData(data)
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
   }

   const [state, setState] = useState('on')

   function cancelExpense(){
    setState('off')
    console.log(state)
   }

   function newExpense(e){
    setState('on')
   }
   if(state == 'off'){
    return <button onClick={newExpense}>Add New Expense</button>
   }
  return (
    <form onSubmit={submitForm}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input onChange={changetitle} value={enteredtitle} type='text'/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input onChange={changeamount} value={enteredAmount} type='number' min="0.01" step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input onChange={changedate} value={enteredDate} type='date' min='2020-01-01' max= '2023-12-31'/>
            </div>
            <div className='new-expense__actions'>
            <button onClick={cancelExpense} >Cancel</button>
            <button onClick={cancelExpense} type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm
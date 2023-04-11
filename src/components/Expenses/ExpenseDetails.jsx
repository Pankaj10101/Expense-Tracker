import { useState } from "react"

const ExpenseDetails = (props) => {
  const [amount, setAmount] = useState(props.amount)

  function change(){
    setAmount(100)
  }

  return (
    <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{amount}</div>
            <button onClick={change}>Update</button>
        </div>
  )
}

export default ExpenseDetails
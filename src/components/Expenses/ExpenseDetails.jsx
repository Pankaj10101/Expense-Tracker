
const ExpenseDetails = (props) => {
  function deleteItem(e){
    console.log(e.target.parentElement.parentElement.remove())
  }
  return (
    <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
            <button onClick={deleteItem}>Delete</button>
        </div>
  )
}

export default ExpenseDetails
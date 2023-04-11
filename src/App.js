import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id:"e1",
      title:"Books",
      amount:200,
      date: new Date(2023, 3,14)
    },
    {
      id:"e2",
      title:"Shoes",
      amount:700,
      date: new Date(2023, 2,14)
    },
    {
      id:"e3",
      title:'Food',
      amount:150,
      date: new Date(2023, 3,25)
    },
    {
      id:"e4",
      title:"Clothes",
      amount:800,
      date: new Date(2023, 1,23)
    }
  ]
const [newData, setNewData] = useState(expenses)
 

  function addExpenseHandler(expense){
    setNewData((prev)=>{
      return [...prev, expense]
    })
  }
  return (
    <div >
    <NewExpense onAddExpense={addExpenseHandler} />

    <Expenses items = {newData}/>

    </div>
  );
}

export default App;

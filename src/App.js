import ExpenseItem from "./components/ExpenseItem";
function App() {

  const expenses = [
    {
      id:"e1",
      title:"Books",
      anount:200,
      date: new Date(2023, 3,14)
    },
    {
      id:"e2",
      title:"Shoes",
      anount:700,
      date: new Date(2023, 2,14)
    },
    {
      id:"e3",
      title:'Food',
      anount:150,
      date: new Date(2023, 3,25)
    },
    {
      id:"e4",
      title:"Clothes",
      anount:800,
      date: new Date(2023, 1,23)
    }
  ]

  return (
    <div >
    {expenses.map((e)=>{
      return <ExpenseItem key={e.id} title ={e.title} amount= {e.anount} date ={e.date}/>
    })}
    </div>
  );
}

export default App;

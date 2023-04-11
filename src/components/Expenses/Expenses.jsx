import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  };
  const filteredItems = props.items.filter((e) => {
    let year = e.date.getFullYear();
    return year.toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses = {filteredItems}/>
      <ExpensesList item = {filteredItems}/>
    </Card>
  );
};

export default Expenses;

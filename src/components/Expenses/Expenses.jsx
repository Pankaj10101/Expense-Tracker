import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filteredItems, setFilteredItems] = useState(props.items)
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    const filteredItems = props.items.filter((e) => {
    let year = e.date.getFullYear();
    return year.toString() === selectedYear;
  });
  setFilteredItems(filteredItems)
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredItems.map((e) => {
        return (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const items = props.items;

  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {items.map((e) => {
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

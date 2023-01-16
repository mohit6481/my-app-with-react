import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "House",
    amount: 6283625,
    date: new Date(2021, 2, 19),
  },
  {
    id: "e2",
    title: "Home Interior",
    amount: 500000,
    date: new Date(2023, 0, 14),
  },
  {
    id: "e3",
    title: "Registration",
    amount: 400000,
    date: new Date(2023, 1, 25),
  },
  {
    id: "e4",
    title: "Advance Maintenance",
    amount: 52000,
    date: new Date(2023, 2, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevState) => {
      return [
        expenseData,
        ...prevState,
      ]
    })
  }

  // If we are not using JSK feature, then we need to write the code in this format. And same reason why we can return only one element in one funtion

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

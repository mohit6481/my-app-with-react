import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpensesList from './components/ExpensesList/ExpensesList'
import "./Expenses.css";
import ExpensesChart from "./components/ExpensesChart/ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;

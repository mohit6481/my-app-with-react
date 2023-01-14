import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "House",
      amount: "Rs 6283625",
      date: new Date(2021, 2, 19),
    },
    {
      id: "e2",
      title: "Home Interior",
      amount: "Rs 500000",
      date: new Date(2023, 0, 14),
    },
    {
      id: "e3",
      title: "Registration",
      amount: "Rs 400000",
      date: new Date(2023, 1, 25),
    },
    {
      id: "e4",
      title: "Advance Maintenance",
      amount: "Rs 52000",
      date: new Date(2023, 2, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((el) => (
        <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
      ))}
    </div>
  );
}

export default App;

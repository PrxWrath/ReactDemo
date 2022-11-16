import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  let date = new Date();
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 250,
      date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
      location: "ABC General Store",
    },
    {
      id: "e2",
      title: "Movie Ticket",
      amount: 475,
      date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
      location: "PVR, New Delhi",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 4000,
      date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
      location: "Mumbai",
    },
    {
      id: "e4",
      title: "Laptop",
      amount: 45000,
      date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
      location: "C2C Electronics",
    },
  ];

  return (
    <div>
      <header className="App-interface">
        <h1>Expense Items</h1>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              expenseTitle={expense.title}
              expensePrice={expense.amount}
              expenseDate={expense.date}
              LocationOfExpenditure={expense.location}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;

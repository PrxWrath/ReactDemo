import "./App.css";
import ExpenseForm from "./components/CreateExpense/ExpenseForm";
import Expenses from "./components/Expenses/Expenses";
const App = ()=>{
  
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 250,
      date: new Date(2022, 3, 13),
    
    },
    {
      id: "e2",
      title: "Movie Ticket",
      amount: 475,
      date: new Date(2022, 10, 12),
      
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 4000,
      date: new Date(2022, 8, 10),
      
    },
    {
      id: "e4",
      title: "Laptop",
      amount: 45000,
      date: new Date(2022, 5, 16),
     
    },
  ];
  
  return (
    <div>
      <header className="App-interface">
        <h1>Expense Tracker</h1>
        <ExpenseForm/>
        <Expenses expenses={expenses}/>
      </header>
    </div>
  );
}

export default App;

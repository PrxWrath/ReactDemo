import "./App.css";
import Expenses from "./components/Expenses/Expenses";
const App = ()=>{
  
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 250,
      date: new Date(2022, 3, 13),
      location: "ABC General Store",
    },
    {
      id: "e2",
      title: "Movie Ticket",
      amount: 475,
      date: new Date(2022, 10, 12),
      location: "PVR, New Delhi",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 4000,
      date: new Date(2022, 8, 10),
      location: "Mumbai",
    },
    {
      id: "e4",
      title: "Laptop",
      amount: 45000,
      date: new Date(2022, 5, 16),
      location: "C2C Electronics",
    },
  ];
  
  return (
    <div>
      <header className="App-interface">
        <h1>Expense Items</h1>
        <Expenses expenses={expenses}/>
      </header>
    </div>
  );
}

export default App;

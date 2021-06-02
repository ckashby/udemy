import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
// import ExpenseDate from "./components/ExpenseDate";

function App() {
  return (
    <div className="App">
      <h1>Welcome to our app</h1>
      <img src={logo} alt="react logo" width="300px" />
      <NewExpense />
      <ExpenseItem />
    </div>
  );
}

export default App;

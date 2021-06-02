import { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem() {
  const [title, setTitle] = useState("First state");

  const clickHandler = () => {
    setTitle("Updated...");
  };

  return (
    <div className="expense-item">
      <div className="myBorder">
        <ExpenseDate />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">$ 68.43</div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;

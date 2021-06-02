import React, { useState } from "react";

const NewExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState();

  const titleChangeHandler = (e) => {
    // setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    // setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    // setDate(e.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          {title}
          <div>
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
            {amount}
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              min="2021-5-20"
              max="2021-5-21"
              onChange={dateChangeHandler}
            />
          </div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;

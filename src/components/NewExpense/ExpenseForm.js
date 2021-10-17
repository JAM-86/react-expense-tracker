import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Array destructuring assigning an empty string into 'enteredTitle' while creating a function 'setEnteredTitle' to allow us to save the state of title of expense(s)
  const [enteredTitle, setEnteredTitle] = useState("");
  //Array destructuring assigning an empty string into 'enteredAmount' while creating a function 'setEnteredAmount' to allow us to save the state of amount of expense(s)
  const [enteredAmount, setEnteredAmount] = useState("");
  //Array destructuring assigning an empty string into 'enteredDate' while creating a function 'setEnteredDate' to allow us to save the state of date of expense(s)
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  //Function to 
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //     return { ...prevState, enteredAmount: event.target.value}
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value}
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

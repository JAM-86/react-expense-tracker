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

  //Event function to set whatever keystroke data to 'enteredTitle' value to and saved whenever onChange event occurs within titlChangeHandler()
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

  //Event function to set whatever keystroke data to 'enteredAmount' value to and saved whenever onChange event occurs within amountChangeHandler()
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

  //Event function to set whatever keystroke data to 'enteredDate' value to and saved whenever onChange event occurs within dateChangeHandler()
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

  //Event function to handle submit button i.e. 'Add Expense' to set enteredTitle, enteredAmount and eventeredDate to expenseData object which is passed through onSaveExpenseData()
  const submitHandler = (event) => {
    //Prevents/stops the default action of an element from happening
    event.preventDefault();

    //Set enteredTitle, enteredAmount and eneteredDate to exepenseData object
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
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

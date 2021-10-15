import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

//Array of static expense data i.e. 4 expense items
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

//App function with 0 parameters used to render entire application to root in index.js with default data at start
const App = () => {
  //Array destructuring assigning DUMMY_EXPENSES data into 'expenses' while creating a function 'setExpenses' to allow us to save the state of expense items
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //Event function used for setting new expense 'add' is defined as an action i.e. adding new expense, 'Handler' is defined as a event i.e. button click
  const addExpenseHandler = (expense) => {
    //Set new expense state and save previous expense state. i.e. 'expense' => new state :: 'preExpenses' => previous state. Previous state is saved by utlizing the spread '...' operator
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  return (
    <div>
      {/*New Expense component used for rendering form i.e. title, amount, dates and buttons. Contains one argument storing 'addExpenseHandler' funciton which is set to 'onAddExpense' prop*/}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

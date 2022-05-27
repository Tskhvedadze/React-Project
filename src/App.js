import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
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
  {
    id: "e5",
    title: "New Desk ",
    amount: 499.99,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e6",
    title: "A Book",
    amount: 194.47,
    date: new Date(2022, 6, 28),
  },
  {
    id: "e7",
    title: "Paper",
    amount: 190.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e8",
    title: "A Pencil",
    amount: 500,
    date: new Date(2022, 4, 28),
  },
  {
    id: "e9",
    title: "Smart Phone",
    amount: 890.99,
    date: new Date(2020, 0, 28),
  },
  {
    id: "e10",
    title: "Computer",
    amount: 2990.67,
    date: new Date(2020, 4, 28),
  },
  {
    id: "e11",
    title: "Tablet",
    amount: 1294.67,
    date: new Date(2020, 5, 28),
  },
  {
    id: "e12",
    title: "Head Phones",
    amount: 594.67,
    date: new Date(2021, 9, 28),
  },
  {
    id: "e13",
    title: "Electric Motorcycle",
    amount: 894.67,
    date: new Date(2021, 1, 28),
  },
  {
    id: "e14",
    title: "DVD Player",
    amount: 794.67,
    date: new Date(2020, 10, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

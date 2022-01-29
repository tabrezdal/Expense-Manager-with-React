import './App.css';

import React, { useState } from 'react';

import Expenses from './components/Expenses-comps/Expenses'

import NewExpense  from './components/NewExpenses/NewExpense';


let DummyData = [
  {
    id: 1,
    title: 'Travel Tickets',
    amount: '700',
    date: new Date(2022, 1, 15)
  },
  {
    id: 2,
    title: 'Hotel Suite Booking',
    amount: '2500',
    date: new Date(2022, 1, 16)
  },
  {
    id: 3,
    title: 'Entry Fees',
    amount: '1200',
    date: new Date(2022, 1, 17)
  }
]


function App() {

  const appName ="TZ's Expense Manager";

  const [expenses, appendNewData] = useState(DummyData);

  const newExpense = (expDt) => {
    console.log(expDt);
  
    const updatedExpenses = [expDt, ...expenses]
    appendNewData(updatedExpenses);
  }



  return (
    <div className="App">
      <h2>{appName}</h2>

      <NewExpense getNewData = {newExpense} />

      <Expenses items={expenses} />

      
    </div>
  );
}

export default App;

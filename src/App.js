import './App.css';

import React from 'react';

import Expenses from './components/Expenses-comps/Expenses'

function App() {

  let expenses = [
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
  

  const appName ="TZ's Expense Manager";

  return (
    <div className="App">
      <h2>{appName}</h2>

      <Expenses items={expenses} />

      
    </div>
  );
}

export default App;

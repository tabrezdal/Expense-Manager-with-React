import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseFrom = (props) => {

    let [enteredTitle, setEnterdTitle] = useState('');
    let [enteredAmount, setEnterdAmount] = useState('');
    let [enteredDate, setEnterdDate] = useState('');


    const onChnageTitle = (event) => {
        setEnterdTitle(event.target.value);
    }

    const onChangeAmount = (event) => {
        setEnterdAmount(event.target.value);
    }

    const onChangeDate = (event) => {
        setEnterdDate(event.target.value);
    }

    const submitData = (event) => {
        event.preventDefault();

        const ExpeneseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.getExpData(ExpeneseData);

        console.log(ExpeneseData)
        
        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');
    }

  return (
    <form onSubmit={submitData}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={ enteredTitle } onChange={onChnageTitle} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={ enteredAmount } min="0.01" steps="1" onChange={onChangeAmount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={ enteredDate } onChange={onChangeDate}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>
  );
}

export default ExpenseFrom;

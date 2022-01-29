import React from 'react';
import './NewExpense.css'

import ExpenseForm from './ExpenseFrom';

const NewExpense = (props) => {
    
    const getExpenseData = (ExpData) => {

        console.log(ExpData);


        const NewExpense = {
            ...ExpData,
            id : Math.random().toString(),
        }

        props.getNewData(NewExpense);

        console.log(NewExpense);
    }

  return (
    <div className="new-expense">
        <ExpenseForm getExpData={getExpenseData}/>
    </div>
  );
};

export default NewExpense;

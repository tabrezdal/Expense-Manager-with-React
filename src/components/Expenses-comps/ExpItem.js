import './ExpItem.css';

import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';

import Card from '../UI-comps/Card';


const ExpItem = (props) => {
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        
    <div className="expense-item__description">
        <h2>{ props.title }</h2>
        <div className="expense-item__price">₹ { props.amount }/-</div>
    </div>
    </Card>
  );
};

export default ExpItem;

import './Expenses.css';

import React from 'react';

import ExpItem from './ExpItem';
import Card from '../UI-comps/Card'

const Expenses = ({items}) => {
  return (
      <Card className="expenses">
        <ExpItem 
        date={items[0].date}
        title={items[0].title}
        amount={items[0].amount} />

        <ExpItem 
        date={items[1].date}
        title={items[1].title}
        amount={items[1].amount} />
        
        <ExpItem 
        date={items[2].date}
        title={items[2].title}
        amount={items[2].amount} />
      </Card>
  );
};

export default Expenses;

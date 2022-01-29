import './Expenses.css';

import React from 'react';

import ExpItem from './ExpItem';
import Card from '../UI-comps/Card'

const Expenses = ({items}) => {
  return (
      <Card className="expenses">
        {
          items.map(item => 
            <ExpItem key={item.id}
              date={ item.date }
              title={ item.title }
              amount={ item.amount } />
          )
        };
      
      </Card>
  );
};

export default Expenses;

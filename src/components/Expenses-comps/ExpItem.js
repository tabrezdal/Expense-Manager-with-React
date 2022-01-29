import './ExpItem.css';

import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';

import Card from '../UI-comps/Card';


const ExpItem = (props) => {

  const [newTitle, setNewTitle] = useState("")

  // let title = props.title;
  
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    // title = "New "+ props.title;
    // console.log(title);
    // setTitle("New " + props.title );
    setTitle(newTitle);
  }

  const onChangeHandler = (event) => {
    setNewTitle(event.target.value);
  }


  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        
    <div className="expense-item__description">
        <h2>{ title }</h2>
        <div className="expense-item__price">₹ { props.amount }/-</div>
    </div>
    <input type="text" value={newTitle} onChange={onChangeHandler} />
    <button onClick={changeTitle}>Change Titles</button>
    </Card>
  );
};

export default ExpItem;

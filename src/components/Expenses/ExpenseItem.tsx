import { FC } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React, {useState} from 'react';

const ExpenseItem: FC = (props: any): JSX.Element => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  const [title, setTitle] = useState(props.title)
  const changeTitle=()=>{
    setTitle('Changed!');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate month={month} day={day} year={year} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;

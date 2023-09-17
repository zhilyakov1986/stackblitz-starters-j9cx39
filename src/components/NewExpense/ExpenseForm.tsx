import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setNewTitle] = useState('');
  const [enteredAmount, setNewAmount] = useState('');
  const [enteredDate, setNewDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const dateChangeHandler = (event) => {
    //setUserInput({ ...userInput, enteredDate: event.target.value });
    setNewDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };
  const titleChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setNewTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setNewAmount(event.target.value);
  };
  const generalChangeHandler = (identifier, value) => {
    // console.log('value: ', value);
    // console.log('identifier: ', identifier);
    if (identifier === 'title') setNewTitle(value);
    if (identifier === 'date') setNewDate(value);
    if (identifier === 'amount') setNewAmount(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.onSavedExpenseData(expenseData);
    setNewAmount('');
    setNewDate('');
    setNewTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input onChange={titleChangeHandler} type="text" /> */}
          <input
            onChange={(event) => {
              generalChangeHandler('title', event.target.value);
            }}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

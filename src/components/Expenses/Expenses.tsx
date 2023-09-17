import ExpensesFilter from '../Expenses/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import React, { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState('2020');
  let filterInfoText = '2019, 2021 & 2022';
  if (filteredYear === '2019') filterInfoText = '2020, 2021 & 2022';
  else if (filteredYear === '2021') filterInfoText = '2019, 2020 & 2022';
  else if (filteredYear === '2020') filterInfoText = '2019, 2021 & 2022';
  else filterInfoText = '2019, 2020 & 2021';
  const items = props.items;
  const filterChangeHandler = (selectedYear) => {
    console.log('selected year inside expenses: ', selectedYear);
    setSelectedYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <p>Data for years{filterInfoText} is hidden.</p>
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        />
      </Card>
    </>
  );
};

export default Expenses;

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const addedExpenseItem = (addedExpense) => {
    const id = Math.random();
    const expnseData = { ...addedExpense, id };
    props.onAddedExpense(expnseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSavedExpenseData={addedExpenseItem} />
    </div>
  );
};
export default NewExpense;

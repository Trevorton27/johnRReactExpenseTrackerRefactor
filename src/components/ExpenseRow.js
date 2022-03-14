import React from 'react';

const ExpenseRow = ({ expenseList, deleteExpense }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return expenseList.map((expense) => (
    <tr key={expense.id}>
      <td>{expense.date}</td>
      <td>{formatter.format(expense.amount)}</td>
      <td>{expense.vendor}</td>
      <td>{expense.description}</td>
      <td>
        <button
          className='deleteButton'
          onClick={(e) => deleteExpense(expense.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
};

export default ExpenseRow;

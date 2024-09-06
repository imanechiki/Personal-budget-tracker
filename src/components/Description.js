import React from 'react';

const Description = ({ expenses }) => {
  return (
    <div>
      <h2>Expenses:</h2>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense.name}: ${expense.amount}</li>
          ))}
        </ul>
      ) : (
        <p>No expenses recorded.</p>
      )}
    </div>
  );
};

export default Description;
